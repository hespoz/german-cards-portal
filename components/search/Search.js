import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import WordDescription from '../WordDescription';
import {Grid, List, Input, Message } from 'semantic-ui-react'

import {
    searchByKeyword,
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
            this.props.searchByKeyword(this.state.keyword, 'de')
        })
    }

    onSearchInputFocus = () => {
        this.props.searchByKeyword(this.state.keyword, 'de')
    }

    onClose = () => {
        this.props.closeSearch()
    }

    addNewWord = () => {
        this.setState({openAddNewWordDialog:true})
    }

    render() {

        const {searchResult, open} = this.props

        return (
            <div>

                <NewWordModal open={this.state.openAddNewWordDialog}/>

                {open ?
                    <div id={"overlay"} onClick={this.onClose}>
                    </div>
                    :
                    null
                }
                <div id={"search"}>

                    <Grid>

                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Input icon='search'
                                       placeholder='Search...' fluid
                                       onChange={this.onSearchInputChange}
                                       onFocus={this.onSearchInputFocus}
                                       value={this.state.keyword}/>
                            </Grid.Column>


                        </Grid.Row>

                        {open ?
                            <Grid.Row>
                                <Grid.Column>

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


                                </Grid.Column>
                            </Grid.Row>

                            :
                            null


                        }




                    </Grid>


                </div>

                <style jsx>{`

                  #search {
                    position:absolute;
                    z-index:10;
                    width: 47%;
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
    closeSearch: closeSearch
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Search);