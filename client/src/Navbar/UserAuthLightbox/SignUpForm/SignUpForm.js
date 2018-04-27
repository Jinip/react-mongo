import React, { Component } from 'react';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import 'bootstrap-css';

const url = "http://localhost:3001/auth/"

class SignUpForm extends Component {
    state = {
        username: "",
        password: "",
        passwordRepeat: "",
        alert: "",
        submitDisabled: true,
        //userAlert: "",
        //passAlert: "",
        //usernames: ["bob", "mike"]
    }

    usernameOnChange = (e) => {
        this.setState({username: e.target.value}, this.validate);
        /* window.clearTimeout(timer);
        this.setState({userAlert: ""});
        let timer = setTimeout(this.checkUsername, 2000) */
    }

    passwordOnChange = (e) => {
        this.setState({password: e.target.value}, this.validate);
    }

    passwordRepeatOnChange = (e) => {
        this.setState({passwordRepeat: e.target.value}, this.validate);
    }

    /* checkUsername = (name) => {
        this.state.usernames.includes(this.state.username)
            ? this.setState({userAlert: "username in use"})
            : this.setState({userAlert: ""})
    } */

    validate = () => {
        this.setState({submitDisabled: true});
        this.setState({alert: ""});

        if (this.state.passwordRepeat === ""){
            return;
        } else if (this.state.password === this.state.passwordRepeat) {
            if (this.state.username !== ""){
                this.setState({submitDisabled: false});
            }
        } else {
            this.setState({alert: "passwords don't match"})
        }
    }

    submit = (e) => {
        e.preventDefault()
        axios.post(url + "signup/", {
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
        //API GET user={state.username}
            //.then
                //username !exist
                    //API POST new user
                        //.then
                            //save user and toggle signedin
                            //this.props.logIn();
                            //this.props.toggleSigning();
                //username exists
                    //this.setState({alert: "Username is aready in use, please choose another"});

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
                            Username: 
                            <input type="text" value={this.state.username} onChange={this.usernameOnChange} />
                        </label>
                        <label>
                            Password: 
                            <input type="password" value={this.state.password} onChange={this.passwordOnChange} />
                        </label>
                        <label>
                            Repeat Password: 
                            <input type="password" value={this.state.passwordRepeat} onChange={this.passwordRepeatOnChange} />
                        </label>
                        <Button disabled={this.state.submitDisabled} type="submit">Submit</Button>
                    </form>
                    {this.state.alert ? (<Alert bsStyle="warning">{this.state.alert}</Alert>) : (<div></div>)}
                    {/* this.state.passAlert ? (<Alert bsStyle="warning">{this.state.passAlert}</Alert>) : (<div></div>) */}
                    <span>Already a member? <a onClick={this.props.toggleFormContext}>Sign In!</a></span>
                </Modal.Body>
            </div>
        )
    }
}

export default SignUpForm;