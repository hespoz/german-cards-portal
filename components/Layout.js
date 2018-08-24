import React, {Component} from "react";
import Link from 'next/link';
import {Container, Header, Grid, Menu, Flag} from 'semantic-ui-react'
import { withRouter } from 'next/router'

class Layout extends Component {

    render() {

        const { router } = this.props;

        return (
            <div>

                <Container>

                    <Grid centered columns={1}>
                        <Grid.Row>
                            <Grid.Column>

                                <Menu pointing secondary>

                                    <Menu.Menu position='left'>

                                        <Menu.Item>
                                            <Header as='h3'>Germano</Header>
                                        </Menu.Item>

                                    </Menu.Menu>

                                    <Menu.Menu position='right'>
                                        <Menu.Item active={router.pathname === '/'}>
                                            <Link as={'/'} href={`/`}>
                                                <a>Inicio</a>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item active={router.pathname === '/cards'}>
                                            <Link as={'/cards'} href={`/cards`}>
                                                <a>Cards</a>
                                            </Link>
                                        </Menu.Item>

                                        <Menu.Item>
                                            <Flag name={'gb'}/>
                                            <Flag name={'es'}/>
                                        </Menu.Item>

                                    </Menu.Menu>
                                </Menu>


                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                {this.props.children}
                            </Grid.Column>
                        </Grid.Row>


                    </Grid>


                </Container>

            </div>
        )
    }

}

export default withRouter(Layout);