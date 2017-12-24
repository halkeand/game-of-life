//Create a row with specified num of cell, randomly assigned 0 or 1
export const createRow = cellNum => {
  const arr = [];
  for (let i = 0; i < cellNum; i++) {
    let randomZeroOrOne = Math.round(Math.random());
    arr.push(randomZeroOrOne)
  }
  return arr;
}


//Create a table with specified num of rows and cells per rows
export const createTableArr = (cellsPerRow, numberOfRows) => {
  let output = []
  for (let i = 0; i < numberOfRows; i++) {
    output.push(createRow(cellsPerRow))
  }

  return output;
}

//Map a 2d array
export const map2DArr = (arr) => {
  arr.map((row, rowIndex, table) => {
    return row.map((cell, cellIndex) => {
      return console.log(table[rowIndex+1]);
    });
  });
}
