import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap-css';

class SignInForm extends Component {
    render() {
        return (
            <div>
                <Modal.Header>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={this.props.toggleFormContext}>Switch To Sign Up</Button>
                </Modal.Body>
            </div>
        )
    }
}

export default SignInForm;