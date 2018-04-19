import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap'
import 'bootstrap-css';
import './App.css';

class App extends Component {
  state = {
    data: ""
  };

  componentDidMount(){
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
      <div>
        <Grid className="show-grid">
          <Row >
            <Col xs={2}>
            </Col >
            <Col className="App" xs={8}>
              {this.state.data}
            </Col>
            <Col xs={2}>
            </Col >
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
