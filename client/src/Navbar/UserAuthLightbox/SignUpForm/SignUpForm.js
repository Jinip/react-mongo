import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap-css';

class SignUpForm extends Component {
    render() {
        return (
            <div>
                <Modal.Header>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={this.props.toggleFormContext}>Switch To Sign In</Button>
                </Modal.Body>
            </div>
        )
    }
}

export default SignUpForm;