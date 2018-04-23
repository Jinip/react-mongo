import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Modal } from 'react-bootstrap';
import UserAuthLightbox from './UserAuthLightbox/UserAuthLightbox';
import 'bootstrap-css';

class NavbarComponent extends Component {
    state = {
        isSignedIn: false,
        isSigning: false
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
        this.toggleSigning();
        //this.setState({isSignedIn: true});
    }

    logOut = () => {
        this.setState({isSignedIn: false});
    }

    render() {
        const userToggleButton = this.state.isSignedIn ? (
            <button onClick={this.logOut}>Sign Out</button>
        ) : (
            <button onClick={this.logIn}>Sign In</button>
        )

        return (
            <div>
                <Navbar>
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
                            {userToggleButton}
                        </NavItem>
                    </Nav>
                </Navbar>
                { this.state.isSigning && <UserAuthLightbox isSigning={this.state.isSigning} toggleSigning={this.toggleSigning} /> }
            </div>
        );
    }
}

export default NavbarComponent;