import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SignInForm from './SignInForm/SignInForm'
import SignUpForm from './SignUpForm/SignUpForm'
import 'bootstrap-css';

class UserAuthLightbox extends Component {
    state = {
        displaySignIn: true,
    }

    toggleFormContext = () => {
        this.setState({displaySignIn: !this.state.displaySignIn});
    }

    render() {
        return (
            <Modal show={true}>
                {this.state.displaySignIn ? (
                    <SignInForm logIn={this.props.logIn} toggleFormContext={this.toggleFormContext} toggleSigning={this.props.toggleSigning} />
                ) : (
                    <SignUpForm logIn={this.props.logIn} toggleFormContext={this.toggleFormContext} toggleSigning={this.props.toggleSigning} />
                )}
            <Button onClick={this.props.toggleSigning}>Close</Button>
        </Modal>
        )
    }
}

export default UserAuthLightbox;