import React from 'react';
// import {getArrToNum} from '../utils'
const  Board = (props) => {
    const { board } = props;
    return (
      <main className="board-container">
        <table className="board">
          <tbody>
          {
            board.map(row => {
              return (
                <tr>
                  {
                    row.map(num => {
                      return (
                        <td className={num === 1 ? 'living-cell' : 'dead-cell'}></td>
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
