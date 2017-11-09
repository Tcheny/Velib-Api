import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : "" // state de l'input vide
    };
  }

  // state de l'input égal à la valeur de l'input
  handleChange=(e)=>{
    this.setState({
      inputValue : e.target.value
    });
  }

  // met à jour le state du parent dans (App.js)
  handleClick=(e)=>{
    e.preventDefault();
    this.props.func(this.state.inputValue) // stocke la valeur insérée dans la props.func
    this.setState({
      inputValue : "" // une fois l'input validé, vider le champs
    });
  }

  render() {
    return (
        <form>
          <input onChange={this.handleChange} value={this.state.inputValue} placeholder="🔍 Code postal"/>
          <button onClick={this.handleClick}>SEND</button>
        </form>
        );
  }
}

export default Input;
