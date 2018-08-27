import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Link from 'next/link';
import {Grid, List, Card, Input, Flag, Table, Message, Button} from 'semantic-ui-react'

import {
    searchByKeyword
} from '../../actions/dictionaryAction'


const generateItem = (item) => {


    const getFlagCode = (lang) => {
        switch (lang) {
            case 'en':
                return 'gb'
            case 'es':
                return 'es'
            default:
                return 'gb'
        }
    }

    const renderConjugation = (conjugations) => {
        return <Table celled>

            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell textAlign={'center'}>Pronoum</Table.HeaderCell>
                    <Table.HeaderCell textAlign={'center'}>Conjugation</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {conjugations.map((item, index) => {
                    return <Table.Row>
                        <Table.Cell textAlign={'center'}>{item.pronoum}</Table.Cell>
                        <Table.Cell textAlign={'center'}>{item.conjugation}</Table.Cell>
                    </Table.Row>
                })}
            </Table.Body>

        </Table>
    }

    const renderTranslations = (translations) => {

        return <Table celled>

            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Translation</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {translations.map((translation, index) => {
                    return <Table.Row>
                        <Table.Cell><Flag name={`${getFlagCode(translation.lang)}`}/> {translation.translation}
                        </Table.Cell>
                        <Table.Cell>{translation.description}</Table.Cell>
                    </Table.Row>
                })}
            </Table.Body>

        </Table>

    }

    let title = ''
    let content = null
    let conj = null
    switch (item.type) {
        case 'noun':
            title = `${item.nounProps.article} ${item.word}`
            break;
        case 'verb':
            title = `${item.word}`
            conj = renderConjugation(item.verbProps.conjugation_present)
            break;
        default:
            break;
    }

    content = renderTranslations(item.translations)


    return <Card fluid>
        <Card.Content header={title}/>
        <Card.Content>
            {content}
            {conj}
        </Card.Content>
        <Card.Content extra>
            <Button basic fluid color='blue'>
                Add to card
            </Button>
        </Card.Content>
    </Card>

}

class Search extends Component {

    state = {
        keyword: ''
    }

    onSearchInputChange = (e, data) => {
        this.setState({keyword: data.value}, () => {
            this.props.searchByKeyword(this.state.keyword, 'de')
        })
    }

    render() {

        const {searchResult} = this.props

        return (
            <div>
                <div id={"overlay"} onClick={() => console.log("hola")}>
                </div>
                <div id={"search"}>

                    <Grid>

                        <Grid.Row>
                            <Grid.Column width={12}>
                                <Input icon='search'
                                       placeholder='Search...' fluid
                                       onChange={this.onSearchInputChange}
                                       value={this.state.keyword}/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>

                                {searchResult.length === 0 && this.state.keyword.length > 0 ?

                                    <Message fluid>
                                        <Message.Header>Opss!</Message.Header>
                                        <p>That word does not exist in our database, please add it!</p>
                                        <a href={"#"}>Add keyword</a>
                                    </Message>

                                    :


                                    <List>

                                        {searchResult.map((item, index) => {
                                            return generateItem(item)
                                        })}

                                    </List>


                                }


                            </Grid.Column>
                        </Grid.Row>


                    </Grid>


                </div>

                <style jsx>{`

                  #search {
                    position:absolute;
                    z-index:99999;
                    width: 47%;
                  }

                  #overlay {
                    position: fixed;
                    z-index:99998;
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    left: 0;
                    background-color:rgba(0,0,0,0);
                    top: 0;
                  }

                `}</style>

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    searchResult: state.dictionary.searchResult
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchByKeyword: searchByKeyword
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Search);