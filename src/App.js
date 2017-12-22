import React, { Component } from 'react';
import './App.css';

//Components
import ControlPanel from './components/ControlPanel'
import Board from './components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ControlPanel/>
        <Board/>
      </div>
    );
  }
}

export default App;
