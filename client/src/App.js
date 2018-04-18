import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    data: ""
  };

  componentDidMount(){
    console.log("mounted");
    axios.get("http://localhost:3001")
      .then(res => {
        this.setState({data: res.data});
        console.log(this.state.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.data}
        </p>
      </div>
    );
  }
}

export default App;
