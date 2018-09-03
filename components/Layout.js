import React, {Component} from "react";
import Link from 'next/link';
import { Header, Menu, Flag} from 'semantic-ui-react'
import { withRouter } from 'next/router'

class Layout extends Component {

    render() {

        const { router } = this.props;

        return (
            <div className={'container'}>

                <div className={'row'}>
                    <div className={'col-md-12 col-lg-12'}>
                        <Menu fluid pointing secondary>

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
                                        <a>Sign In</a>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item>
                                    <Flag name={'gb'}/>
                                    <Flag name={'es'}/>
                                </Menu.Item>

                            </Menu.Menu>
                        </Menu>
                    </div>
                </div>

                <div className={'row '}>
                    <div className={'col-12 content-page'}>
                        {this.props.children}
                    </div>
                </div>

                <style jsx>{`

                  .content-page {
                    padding-top:8px;
                  }


                `}</style>

            </div>
        )
    }

}

export default withRouter(Layout);