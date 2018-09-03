import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Link from 'next/link';
import { Responsive, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout';
import Search from '../components/search/Search';
import NewCard from '../components/NewCard';


class Index extends Component {

    state = {activeItem: 'home'}

    /*
    * Here invoke the server middleware (Our server that calls other endpoints) directly and dispatch the store
     */
    static async getInitialProps({store, isServer}) {

        /*await store.execSagaTasks(isServer, dispatch => {
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
        };*/
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        return (

            <Layout>

                <div className={'row'}>
                    <div className={'col-12'}>
                        <Search/>
                    </div>
                </div>




            </Layout>
        )
    }

}


export default Index;