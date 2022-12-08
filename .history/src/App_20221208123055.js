import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/style.css";

class game extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: 0,
  }

  handleClick = () => {
    this.setState({
      value: this.state.value + 1,
    })
  }

  render() { 
    return (
      <>
      <h1>DUPA</h1><br />
      <button onClick={this.handleClick}>klik</button>
      </>

    );
  }
}
 
export default game;