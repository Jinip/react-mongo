import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap-css';

class UserAuthLightbox extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <Modal show={this.props.isSigning} >
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <hr />

                <h4>Overflowing text to show scroll behavior</h4>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
                </p>
                <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
                </p>
                <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
                </p>
                <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
            </Modal.Body>
            <Button onClick={this.props.toggleSigning} />
        </Modal>
        )
    }
}

export default UserAuthLightbox;