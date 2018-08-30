import React, {Component} from "react";
import {Form, Input, Button} from 'semantic-ui-react'
import {searchByExactKeyword} from "../../actions/dictionaryAction"
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import WordDescription from '../WordDescription'

const options = [
    {key: 'noun', text: 'Noun', value: 'noun'},
    {key: 'verb', text: 'Verb', value: 'verb'},
]

const optionsArticle = [
    {key: 'der', text: 'der', value: 'der'},
    {key: 'die', text: 'die', value: 'die'},
    {key: 'das', text: 'das', value: 'das'},
]

class NewWordForm extends Component {

    state = {
        keyword: '',
        wordType: null,
        article:'',
        article_error:false,
        plural:'',
        plural_error:false,
        esTranslation:'',
        esTranslation_error:false,
        enTranslation:'',
        enTranslation_error:false,
        submitTriggered:false
    }

    onChange = (e, data) => {
        this.setState({keyword: data.value})
    }

    onBlur = () => {
        this.searchWord(this.state.keyword)
    }

    onKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.searchWord(this.state.keyword)
        }
    }

    searchWord = () => {

        if (this.state.keyword !== '') {
            this.props.searchByExactKeyword(this.state.keyword)
        }
    }

    onSubmit = () => {
        if (this.state.wordType === 'noun') {
            this.validateNoun((() => alert("Pass")))
        } else {
            console.log("test")
        }
    }

    onFormInputChange = (e, data) => {
        this.setState({
            [data.name]:data.value,
            [`${data.name}_error`]: data.value === '' && this.state.submitTriggered
        })
    }

    validateNoun = (callback) => {
        this.setState({
            submitTriggered:true,
            article_error: this.state.article === '',
            plural_error: this.state.plural === '',
            esTranslation_error: this.state.esTranslation === '',
            enTranslation_error: this.state.enTranslation === ''
        }, () => {
            if(){
                
            }
            callback()
        })
    }

    render() {

        const {wordType} = this.state
        const {exactResult, exactSearchTriggered, loading} = this.props

        return <div>
            <div>
                <Form>
                <Form.Field>
                    <label>New word</label>
                    <Form.Input
                        loading={loading}
                        placeholder='New word...' fluid
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                        onBlur={this.onBlur}
                        value={this.state.keyword}/>
                </Form.Field>
                </Form>
            </div>

            <Form onSubmit={this.onSubmit}>


                {exactResult ?

                    <WordDescription wordItem={exactResult}/>
                    :
                    null
                }

                {!exactResult && exactSearchTriggered ?

                    <Form.Field>
                        <label>Type</label>
                        <Form.Select options={options} placeholder='Type'
                                     onChange={(event, data) => this.setState({wordType: data.value})}/>
                    </Form.Field>

                    :
                    null
                }

                {wordType === 'noun' ?

                    <div>

                        <Form.Field>
                            <label>Article</label>
                            <Form.Select name="article" options={optionsArticle} placeholder='Articles' value={this.state.article} error={this.state.article_error} onChange={this.onFormInputChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Plural</label>
                            <Form.Input name="plural" placeholder='Plural' value={this.state.plural} error={this.state.plural_error} onChange={this.onFormInputChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Spanish translation</label>
                            <Form.Input name="esTranslation" placeholder='Spanish translation' value={this.state.esTranslation} error={this.state.esTranslation_error} onChange={this.onFormInputChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label>English translation</label>
                            <Form.Input name="enTranslation" placeholder='English translation' value={this.state.enTranslation} error={this.state.enTranslation_error} onChange={this.onFormInputChange}/>
                        </Form.Field>


                    </div>

                    :
                    null
                }

                {wordType === 'verb' ?

                    <div>
                        verb
                    </div>

                    :
                    null
                }


                {!exactResult && exactSearchTriggered ?
                    <div>
                        <Button type='submit'>Add</Button>
                    </div>
                    :
                    null
                }


            </Form>

            <style jsx>{`

                  div {
                    margin-bottom:10px;
                  }

            `}</style>

        </div>
    }

}

const mapStateToProps = (state) => ({
    exactResult: state.dictionary.exactResult,
    loadingExact: state.dictionary.loadingExact,
    exactSearchTriggered: state.dictionary.exactSearchTriggered
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchByExactKeyword: searchByExactKeyword
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NewWordForm);