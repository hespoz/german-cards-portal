import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Link from 'next/link';
import {Container, Header, Grid, Menu, List, Card, Flag, Input} from 'semantic-ui-react'
import Layout from '../components/Layout';
import Search from '../components/Search';
import NewCard from '../components/NewCard';

import {
    fetchProjects,
    fetchProjectDetails
} from '../actions/projectsAction';


class Index extends Component {

    state = {activeItem: 'home'}

    /*
    * Here invoke the server middleware (Our server that calls other endpoints) directly and dispatch the store
     */
    static async getInitialProps({store, isServer}) {

        await store.execSagaTasks(isServer, dispatch => {
            dispatch(fetchProjects());
        });

        console.log('');
        console.log('###############################');
        console.log('### Fetched today NASA APOD ###');
        console.log('###############################');
        console.log(store.getState().project.projectList);
        console.log('');

        return {
            projectList: store.getState().project.projectList,
            projectDetails: store.getState().project.projectDetails
        };
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        return (

            <Layout>


                <Search/>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <NewCard/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Layout>
        )
    }

}

const mapStateToProps = (state) => ({
    projectList: state.project.projectList,
    projectDetails: state.project.projectDetails
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchProjects: fetchProjects,
    fetchProjectDetails: fetchProjectDetails
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Index);