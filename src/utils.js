//Create a row with specified num of cell, randomly assigned 0 or 1
export const createRow = (cellNum, mode) => {
  const arr = [];
  for (let i = 0; i < cellNum; i++) {
    let value = mode === 'random' ? Math.round(Math.random()) : 0;
    arr.push(value)
  }
  return arr;
}


//Create a table with specified num of rows and cells per rows
export const createTableArr = (cellsPerRow, numberOfRows, mode) => {
  let output = []
  for (let i = 0; i < numberOfRows; i++) {
    output.push(createRow(cellsPerRow, mode))
  }

  return output;
}

//Get neigbhor cells value
const getNeigbhorCells = (table, rowIndex, rowArr, cellIndex) => {
  let bottomCell, bottomRightCell, bottomLeftCell;
  let topCell, topRightCell, topLeftCell;

    //Bottom cells
    if (table[rowIndex + 1] === undefined) {
      bottomCell = 0;
      bottomRightCell = 0;
      bottomLeftCell = 0;
    } else {
      bottomCell = table[rowIndex+1][cellIndex] || 0;
      bottomRightCell = table[rowIndex+1][cellIndex+1] || 0;
      bottomLeftCell = table[rowIndex+1][cellIndex-1] || 0;
    }

    //Top cells
    if (table[rowIndex - 1] === undefined) {
      topCell = 0;
      topRightCell = 0;
      topLeftCell = 0;
    } else {
      topCell = table[rowIndex-1][cellIndex] || 0;
      topLeftCell = table[rowIndex-1][cellIndex-1] || 0;
      topRightCell = table[rowIndex-1][cellIndex+1] || 0;
    }

    let leftCell = rowArr[cellIndex - 1] || 0;
    let rightCell = rowArr[cellIndex + 1] || 0;

    return [topLeftCell, topCell, topRightCell, bottomLeftCell, bottomCell, bottomRightCell, leftCell, rightCell]
}

//Map a 2d array
export const getNextBoard = (arr) => {
  return arr.map((row, rowIndex, table) => {
    return row.map((cell, cellIndex, rowArr) => {
      const neighborCells = getNeigbhorCells(table, rowIndex, rowArr, cellIndex);
      const numOflivingNeighbor = neighborCells.filter(e => e === 1).length;

      //Ternary giving the next state of each cell depending on Game of life rules
      return cell === 0 && numOflivingNeighbor === 3 ? 1 :
      cell === 1 && (numOflivingNeighbor === 2 || numOflivingNeighbor === 3) ? 1 : 0;
    });
  });
}
