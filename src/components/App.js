import React, { Component } from 'react';
import Input from './Input';
import Display from './Display';

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
        <h1>Trouvez un vélib à Paris</h1>
        <Input func={this.InputSearch}/>
        <Display name={this.state.velibName}/>
        {/* <Maps /> */}
      </div>
    );
  }
}

export default App;
