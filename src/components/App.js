import React, { Component } from 'react';
import Input from './Input';
import Display from './Display';

import logo from '../assets/logo.svg';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      velibName : ""
    };
  }

  InputSearch=(inputVal)=>{
    this.setState({
      velibName : inputVal
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Input func={this.InputSearch}/>
        <Display address={this.state.velibName}/>
      </div>
    );
  }
}

export default App;
