import React, { Component } from 'react';
import './App.css';
import data from './components/data'
import Home from './components/home'
import Info from './components/info'


class App extends Component {




  render() {
    return (
      <div className="App">
      <Home />
      <Info />
      </div>
    );
  }
}

export default App;
