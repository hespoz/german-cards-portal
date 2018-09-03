import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import WordDescription from '../WordDescription';
import {Grid, List, Input, Message } from 'semantic-ui-react'

import {
    searchByKeyword,
    openSearch,
    closeSearch
} from '../../actions/dictionaryAction'
import NewWordModal from "../add_word/NewWordModal";

class Search extends Component {

    state = {
        keyword: '',
        openAddNewWordDialog:false
    }

    onSearchInputChange = (e, data) => {
        this.setState({keyword: data.value}, () => {
            this.props.searchByKeyword(this.state.keyword, false)
        })
    }

    onSearchInputFocus = () => {
        this.props.openSearch()
        this.props.searchByKeyword(this.state.keyword, false)
    }

    onClose = (e) => {
        if (e.target.id === "container-results" || e.target.id === "overlay") {
            this.props.closeSearch()
        }
    }

    closeDialog = () => this.setState({ openAddNewWordDialog: false })

    addNewWord = () => {
        this.props.closeSearch()
        this.setState({openAddNewWordDialog:true})
    }

    render() {

        const {searchResult, open} = this.props

        return (
            <div>

                <NewWordModal open={this.state.openAddNewWordDialog} onClose={this.closeDialog}/>

                {open ?
                    <div id={"overlay"} onClick={this.onClose}>
                    </div>
                    :
                    null
                }
                <div id={"search"}>

                    <div className={'row'}>
                        <div className={'col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'}>
                            <Input icon='search'
                                   size='small'
                                   placeholder='Search...' fluid
                                   onChange={this.onSearchInputChange}
                                   onFocus={this.onSearchInputFocus}
                                   value={this.state.keyword}/>
                        </div>
                    </div>


                    {open ?

                        <div id="container-results" className={'row'} onClick={this.onClose}>
                            <div className={'col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'}>
                                {searchResult.length === 0 && this.state.keyword.length > 0 ?

                                    <Message fluid>
                                        <Message.Header>Opss!</Message.Header>
                                        <p>That word does not exist in our database, please add it!</p>
                                        <a href={"javascript:void(0)"} onClick={this.addNewWord}>Add keyword</a>
                                    </Message>

                                    :

                                    <List>

                                        {searchResult.map((item, index) => {
                                            return <WordDescription wordItem={item}/>
                                        })}

                                    </List>


                                }
                            </div>
                        </div>

                        :
                        null


                    }




                </div>

                <style jsx>{`

                  #search {
                    position:absolute;
                    z-index:10;
                    width: 100%;
                  }

                  #overlay {
                    position: fixed;
                    z-index:9;
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
    searchResult: state.dictionary.searchResult,
    open: state.dictionary.open
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    searchByKeyword: searchByKeyword,
    closeSearch: closeSearch,
    openSearch: openSearch
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Search);