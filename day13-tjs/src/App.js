import React, { Component } from 'react';
import './App.css';
import data from './components/data'
import Home from './components/home'
import Info from './components/info'


class App extends Component {

constructor () {
  super();

    this.state = {
      students: data
    }

}


  render() {
    console.log(this.state.students);
    return (
      <div className="App">
        <Home />
        <Info data = {this.state.students} />
      </div>
    );
  }
}

export default App;
