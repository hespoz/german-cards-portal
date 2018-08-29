import React, {Component} from "react";
import {Modal, Header, Input} from 'semantic-ui-react'
import { searchByKeyword } from "../../actions/dictionaryAction"
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'

import WordDescription from '../WordDescription';

class NewWordModal extends Component {

    state = {
        keyword:''
    }

    onChange = (e, data) => {
        this.setState({keyword: data.value})
    }

    onBlur = () => {
        this.searchWord(this.state.keyword)
    }

    onKeyPress = (event) => {
        if(event.key == 'Enter'){
            this.searchWord(this.state.keyword)
        }
    }

    searchWord = () => {
        this.props.searchByKeyword(this.state.keyword, true)
    }

    render() {

        const {searchResult, loading} = this.props

        return (
            <Modal open={this.props.open} style={{zIndex:'9999999'}} onClose={this.props.onClose}>
                <Modal.Header>Add new word</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Header>Default Profile Image</Header>

                        <Input
                               loading={loading}
                               placeholder='New word...' fluid
                               onChange={this.onChange}
                               onKeyPress={this.onKeyPress}
                               onBlur={this.onBlur}
                               value={this.state.keyword}/>

                        {searchResult && searchResult.length > 0 ?

                            <WordDescription wordItem={searchResult[0]}/>
                            :
                            null
                        }


                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

const mapStateToProps = (state) => ({
    searchResult: state.dictionary.searchResult,
    loading: state.dictionary.loading
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchByKeyword: searchByKeyword
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NewWordModal);