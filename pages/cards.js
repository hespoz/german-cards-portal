import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Layout from '../components/Layout';

import {
    fetchProjects,
    fetchProjectDetails
} from '../actions/projectsAction';


class Cards extends Component {
    static async getInitialProps({query}) {

        console.log("It is executed anytime the page is loaded or redirected", query)


        return query;
    }

    render() {
        return (
            <div>
                <Layout>
                    Cards
                </Layout>
            </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Cards);