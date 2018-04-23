import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import { Grid, Row } from 'react-bootstrap'
import 'bootstrap-css';
import './App.css';

import Navbar from './Navbar/Navbar';

class App extends Component {
  state = {
    data: "",
    homeY: 0,
    aboutY: 0,
    contactY: 0
  };

  componentDidMount(){
    const home = ReactDOM.findDOMNode(this.refs.home);
    const about = ReactDOM.findDOMNode(this.refs.about);
    const contact = ReactDOM.findDOMNode(this.refs.contact);

    this.setState({homeY: home.offsetTop});
    this.setState({aboutY: about.offsetTop});
    this.setState({contactY: contact.offsetTop});

    axios.get("http://localhost:3001")
      .then(res => {
        this.setState({data: res.data});
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
        <Grid className="show-grid">
          <Row >
            <Navbar {...this.state}/>
          </Row>
          <Row>
            <div id="home" ref="home" className="tall">Home</div>
            <div id="about" ref="about" className="tall">About</div>
            <div id="contact" ref="contact" className="tall">Contact</div>
          </Row>
        </Grid>
    );
  }
}

export default App;
