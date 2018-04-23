import React, { Component } from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';
import 'bootstrap-css';

class SignInForm extends Component {
    state = {
        username: "",
        password: "",
        alert: ""
    }

    usernameOnChange = (e) => {
        this.setState({username: e.target.value});
    }

    passwordOnChange = (e) => {
        this.setState({password: e.target.value});
    }

    submit = (e) => {
        e.preventDefault()
        //API GET user={state.username, state.password}
            //.then
                //save user and close lightbox
                    //this.props.logIn();
                    //this.props.toggleSigning();
                //or return alert
                    this.setState({alert: "Username or Password is incorrect"});
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Modal.Header>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.submit}>
                        <label>
                            User Name: 
                            <input type="text" value={this.state.username} onChange={this.usernameOnChange} />
                        </label>
                        <label>
                            Password: 
                            <input type="text" value={this.state.password} onChange={this.passwordOnChange} />
                        </label>
                        <Button type="submit">Submit</Button>
                    </form>
                    {this.state.alert ? (<Alert bsStyle="danger">{this.state.alert}</Alert>) : (<div></div>)}
                    <span>Not a member? <a onClick={this.props.toggleFormContext}>Sign up!</a></span>
                </Modal.Body>
            </div>
        )
    }
}

export default SignInForm;