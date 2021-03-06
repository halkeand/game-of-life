import React from 'react';
// import {getArrToNum} from '../utils'
const  Board = (props) => {
    const { board, handleCellClick } = props;
    return (
      <main className="board-container">
        <table className="board">
          <tbody>
          {
            board.map((row,rowIndex) => {
              return (
                <tr key={`row-${rowIndex}`}>
                  {
                    row.map((num, cellIndex) => {
                      return (
                        <td
                          id={`${rowIndex}-${cellIndex}`}
                          onClick={handleCellClick}
                          key={`row-${cellIndex}`}
                          className={num === 1 ? 'living-cell' : 'dead-cell'}></td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </main>
    )
  }

export default Board
