import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SignInForm from './SignInForm/SignInForm'
import SignUpForm from './SignUpForm/SignUpForm'
import 'bootstrap-css';

class UserAuthLightbox extends Component {
    state = {
        displaySignIn: true
    }

    toggleFormContext = () => {
        this.setState({displaySignIn: !this.state.displaySignIn});
    }

    render() {
        return (
            <Modal show={true}>
                {this.state.displaySignIn ? (
                    <SignInForm toggleFormContext={this.toggleFormContext}/>
                ) : (
                    <SignUpForm toggleFormContext={this.toggleFormContext}/>
                )}
            <Button onClick={this.props.toggleSigning}>Close</Button>
        </Modal>
        )
    }
}

export default UserAuthLightbox;