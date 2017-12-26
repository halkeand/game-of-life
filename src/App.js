import React, { Component } from 'react';
import './App.css';

//Utils
import {createTableArr, getNextBoard } from './utils'
//Components
import ControlPanel from './components/ControlPanel'
import Board from './components/Board'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: createTableArr(50, 50, 'random'),
      timer: null,
      isRunning: true,
      runSpeed: 100, //Milliseconds, between 500 and 5000
      generatorCounter: 0
    }
  }

  handleClearBoard = (params) => {
    //Stop the board next state calculation
    clearInterval(this.state.timer);

      this.setState(prevState => ({
        board: createTableArr(50, 50, 'with empty cells'),
        isRunning: false,
        generatorCounter: 0
      }))
  }

  handleRunClick = () => {
    const { isRunning, runSpeed} = this.state;

    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))
    //If the timer is running we clear it otherwise we reset it
    isRunning ? clearInterval(this.state.timer) : this.setState(prevState => ({
      timer: setInterval(this.setNextBoardToState.bind(this), runSpeed)
    }))
  }

  handleGetRandomBoard = () => {
    this.setState(prevState => ({
      board: createTableArr(50, 50, 'random'),
      generatorCounter: 0
    }))

  }


  setNextBoardToState() {
    this.setState(prevState => ({
      board: getNextBoard(prevState.board),
      generatorCounter: prevState.generatorCounter + 1
    }))
  }


  componentDidMount() {
    const { isRunning, runSpeed } = this.state

    if (isRunning) {
      const timer = setInterval(this.setNextBoardToState.bind(this), runSpeed)
      this.setState(prevState => ({
        timer
      }))
    }
  }


  render() {
    const { board, isRunning, generatorCounter } = this.state;

    return (
      <div className="App">
        <ControlPanel
          generatorCounter={generatorCounter}
          isRunning={isRunning}
          handleRunClick={this.handleRunClick}
          handleClearBoard={this.handleClearBoard}
          handleGetRandomBoard={this.handleGetRandomBoard}/>
        <Board board={board}/>
      </div>
    );
  }
}

export default App;
