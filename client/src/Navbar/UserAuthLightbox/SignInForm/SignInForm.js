import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, Alert } from 'react-bootstrap';
import 'bootstrap-css';

const url = "http://localhost:3001/auth/"

class SignInForm extends Component {
    state = {
        username: "",
        password: "",
        alert: "",
        submitDisabled: true
    }

    usernameOnChange = (e) => {
        this.setState({username: e.target.value}, this.validate);
    }

    passwordOnChange = (e) => {
        this.setState({password: e.target.value}, this.validate);
    }
    
    validate = () => {
        this.setState({submitDisabled: true});
        this.setState({alert: ""});

        if (this.state.username !== "" && this.state.password !== ""){
            this.setState({submitDisabled: false})
        } 
    }
    
    submit = (e) => {
        e.preventDefault()
        axios.post(url + "signin/", {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            if (res.data.message) {
                return this.setState({alert: res.data.message});
            } else {
                localStorage.setItem("danceUser", res.data.username);
                this.props.logIn();
                this.props.toggleSigning();
            }
        })
        .catch(err => {
            return console.log(err);
        })
    }

    render() {
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
                            <input type="password" value={this.state.password} onChange={this.passwordOnChange} />
                        </label>
                        <Button disabled={this.state.submitDisabled} type="submit">Submit</Button>
                    </form>
                    {this.state.alert ? (<Alert bsStyle="danger">{this.state.alert}</Alert>) : (<div></div>)}
                    <span>Not a member? <a onClick={this.props.toggleFormContext}>Sign up!</a></span>
                </Modal.Body>
            </div>
        )
    }
}

export default SignInForm;