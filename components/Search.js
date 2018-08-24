import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Link from 'next/link';
import {Grid, List, Card, Input} from 'semantic-ui-react'

import {
    fetchProjects,
    fetchProjectDetails
} from '../actions/projectsAction';


class Search extends Component {

    render() {

        return (
            <div id={"search"}>
                <Grid >

                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Input icon='search' placeholder='Search...' fluid/>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <List>
                                <List.Item>
                                    <Link as={'/page'} href={`/page`}>
                                        <Card fluid>
                                            <Card.Content header='What i want to do'/>
                                            <Card.Content description={"Card about my dreams"}/>
                                            <Card.Content extra>
                                                Corrected or not
                                            </Card.Content>
                                        </Card>
                                    </Link>
                                </List.Item>
                                <List.Item>
                                    <Link as={'/page'} href={`/page`}>
                                        <Card fluid>
                                            <Card.Content header='What i want to do'/>
                                            <Card.Content description={"Card about my dreams"}/>
                                            <Card.Content extra>
                                                Corrected or not
                                            </Card.Content>
                                        </Card>
                                    </Link>
                                </List.Item>
                                <List.Item>
                                    <Link as={'/page'} href={`/page`}>
                                        <Card fluid>
                                            <Card.Content header='What i want to do'/>
                                            <Card.Content description={"Card about my dreams"}/>
                                            <Card.Content extra>
                                                Corrected or not
                                            </Card.Content>
                                        </Card>
                                    </Link>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>







                </Grid>

                <style jsx>{`

                  #search {
                    position:absolute;
                    z-index:99999;
                    width: 47%;
                  }

                `}</style>
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


export default connect(mapStateToProps, mapDispatchToProps)(Search);