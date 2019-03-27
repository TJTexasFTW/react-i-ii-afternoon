import React, { Component } from 'react';
import './buttons.css';

class Buttons extends Component {




  render() {

    console.log(this.props)

    return (
      <div className="Buttons">
        <button id="Previous" onClick={this.props.decreaseIndex}> &#60; Previous</button>
        <button id="Next" onClick={this.props.increaseIndex}>Next ></button>
      </div>
    );
  }
}

export default Buttons;
