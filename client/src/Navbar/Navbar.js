import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Modal } from 'react-bootstrap';
import UserAuthLightbox from './UserAuthLightbox/UserAuthLightbox';
import 'bootstrap-css';

class NavbarComponent extends Component {
    state = {
        isSignedIn: false,
        isSigning: false,
        user: ""
    }

    componentDidMount(){
        this.setState({user: localStorage.getItem("danceUser")})
    }

    navigateToAnchor = (y) => {
        return (e) => {
            e.preventDefault();
            window.scrollTo(0, y);
        }
    }

    toggleSigning = () => {
        this.setState({isSigning: !this.state.isSigning})
    }

    logIn = () => {
        this.setState({user: localStorage.getItem("danceUser")})
        this.setState({isSignedIn: true});
    }

    logOut = () => {
        localStorage.removeItem("danceUser");
        this.setState({user: ""});
        this.setState({isSignedIn: false});
    }

    render() {
        const userToggleButton = this.state.isSignedIn ? (
            <button onClick={this.logOut}>Sign Out</button>
        ) : (
            <button onClick={this.toggleSigning}>Sign In</button>
        )

        return (
            <div>
                <Navbar fixedTop="true">
                    <Nav>
                        <NavItem eventKey={1} onClick={this.navigateToAnchor(this.props.homeY)}>
                            Home
                        </NavItem>
                        <NavItem eventKey={2} onClick={this.navigateToAnchor(this.props.aboutY)}>
                            About
                        </NavItem>
                        <NavItem eventKey={3} onClick={this.navigateToAnchor(this.props.contactY)}>
                            Contact
                        </NavItem>

                        <NavItem eventKey={4}>
                            {this.state.user && <p>Welcome, {this.state.user}</p>} {userToggleButton}
                        </NavItem>
                    </Nav>
                </Navbar>
                { this.state.isSigning && <UserAuthLightbox toggleSigning={this.toggleSigning} logIn={this.logIn} logOut={this.logOut}/> }
            </div>
        );
    }
}

export default NavbarComponent;