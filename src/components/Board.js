import React from 'react';
// import {getArrToNum} from '../utils'
const  Board = (props) => {
    const { board } = props;
    return (
      <main className="board-container">
        <table>
          <tbody>
          {
            board.map(row => {
              return (
                <tr>
                  {
                    row.map(num => {
                      return (
                        <td>
                          {num}
                        </td>
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
