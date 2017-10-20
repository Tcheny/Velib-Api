import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : ""
    };
  }

  handleChange=(e)=>{
    this.setState({
      inputValue : e.target.value
    });
  }

  handleClick=(e)=>{
    e.preventDefault();
    this.props.func(this.state.inputValue)
    this.setState({
      inputValue : "" 
    });
  }

  render() {
    return (
        <form>
          <input onChange={this.handleChange} value={this.state.inputValue}/>
          <button onClick={this.handleClick}>Send</button>
        </form>
        );
  }

}

export default Input;
