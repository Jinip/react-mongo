import React, { Component } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import 'bootstrap-css';

class SignUpForm extends Component {
    state = {
        username: "",
        password: "",
        passwordRepeat: "",
        userAlert: "",
        passAlert: "",
        usernames: ["bob", "mike"]
    }

    usernameOnChange = (e) => {
        this.setState({username: e.target.value});
        window.clearTimeout(timer);
        this.setState({userAlert: ""});
        let timer = setTimeout(this.checkUsername, 2000)
    }

    passwordOnChange = (e) => {
        this.setState({password: e.target.value});
    }

    passwordRepeatOnChange = (e) => {
        this.setState({passwordRepeat: e.target.value}, this.checkPasswords);
    }

    checkUsername = (name) => {
        this.state.usernames.includes(this.state.username)
            ? this.setState({userAlert: "username in use"})
            : this.setState({userAlert: ""})
    }

    checkPasswords = () => {
        console.log(this.state.password, this.state.passwordRepeat);
        this.state.password !== this.state.passwordRepeat
            ? this.setState({passAlert: "passwords don't match"})
            : this.setState({passAlert: ""})
    }

    submit = (e) => {
        e.preventDefault()
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
                        <Button type="submit">Submit</Button>
                    </form>
                    {this.state.userAlert ? (<Alert bsStyle="warning">{this.state.userAlert}</Alert>) : (<div></div>)}
                    {this.state.passAlert ? (<Alert bsStyle="warning">{this.state.passAlert}</Alert>) : (<div></div>)}
                    <span>Already a member? <a onClick={this.props.toggleFormContext}>Sign In!</a></span>
                </Modal.Body>
            </div>
        )
    }
}

export default SignUpForm;