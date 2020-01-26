// Zero matrix: Write an algorithm such that if an element is an M x N matrix is 0, it's entire row and column are set to 0.

let matrix = [
  [7,2,6], 
  [-2,3,4], 
  [3,0,1], 
  [2,3,0] 
  ];
// console.log(matrix[2].fill(0));


function zeroMatrix(matrix) {
  //first figure out how many rows and columns
  let columns = matrix[0].length;
  let rows = matrix.length;
  let newMatrix = []; 
  let zeroedColumns = [];


  // check rows
  for (let i = 0; i < rows; i++) {
    if (matrix[i].includes(0)) {
      zeroedColumns.push(matrix[i].indexOf(0));
      newMatrix.push(matrix[i].fill(0));
    } else {
      newMatrix.push(matrix[i]);
    }
  }
  // now zero columns
  for (let i = 0; i < newMatrix.length; i++) {
    let y = zeroedColumns[i];
    let z = newMatrix[i];

    for (let j = 0; j < z.length; j++) {
      newMatrix[j][y] = 0;
    }
  }

    
    
// newMatrix[i][y] = 0;
  

  console.log(newMatrix);
  // console.log(zeroMatrix);
}  


zeroMatrix(matrix);

