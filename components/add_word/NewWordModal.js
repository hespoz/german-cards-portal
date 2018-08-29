import React, {Component} from "react";
import {Modal, Header} from 'semantic-ui-react'

class NewWordModal extends Component {

    render() {

        return (
            <Modal open={this.props.open} style={{zIndex:'9999999'}}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

export default NewWordModal;