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
      generatorCounter: 0,
      columnsNum: 50,
      rowsNum: 50
    }
  }


  handleClearBoard = (params) => {
    //Stop the board next state calculation
    clearInterval(this.state.timer);

      this.setState(prevState => ({
        board: createTableArr(prevState.columnsNum, prevState.rowsNum, 'with empty cells'),
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
      board: createTableArr(prevState.columnsNum, prevState.rowsNum, 'random'),
      generatorCounter: 0
    }))

  }

  handleCellClick = (e) => {
    let clickedCellLocation = e.target.id.split('-')
    let newBoard = this.state.board;
    //We search for the right cell in the board and give it a status of living cell or dead cell if she already live
    let cell = newBoard[clickedCellLocation[0]][clickedCellLocation[1]];

    cell === 0 ? newBoard[clickedCellLocation[0]][clickedCellLocation[1]] = 1 :
    newBoard[clickedCellLocation[0]][clickedCellLocation[1]] = 0;

    this.setState(prevState => ({
      board: newBoard
    }))
  }


  //Sizes of the Board
  handleLargeSize = () => {
    this.setState(prevState => ({
      board: createTableArr(50, 50, 'random'),
      columnsNum: 50,
      rowsNum: 50
    }))
  }

  handleMediumSize = () => {
    console.log('tgd');
    this.setState(prevState => ({
      board: createTableArr(30, 30, 'random'),
      columnsNum: 30,
      rowsNum: 30
    }))
  }

  handleSmallSize = () => {
    this.setState(prevState => ({
      board: createTableArr(10, 10, 'random'),
      columnsNum: 10,
      rowsNum: 10
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
          handleGetRandomBoard={this.handleGetRandomBoard}

          handleLargeSize={this.handleLargeSize}
          handleMediumSize={this.handleMediumSize}
          handleSmallSize={this.handleSmallSize}/>
        <Board
          board={board}
          handleCellClick={this.handleCellClick}/>
      </div>
    );
  }
}

export default App;
