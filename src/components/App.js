import React, { Component } from 'react';
import Input from './Input';
import Display from './Display';

import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      velibNum : "" // state velibNum vide
    };
  }

  InputSearch=(inputVal)=>{
    this.setState({
      velibNum : inputVal // state velibNum = la valeur de input
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Trouvez un vélib à Paris</h1>
        <Input func={this.InputSearch}/>
        <Display num={this.state.velibNum}/>
      </div>
    );
  }
}

export default App;
