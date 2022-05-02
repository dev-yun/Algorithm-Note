function solution(rows, columns, queries) {
  let answer = []
  let matrix = new Array(rows);
  
  for (let row = 0; row < rows; row++) matrix[row] = new Array(columns);
  
  for (let row = 0; row < rows; row++){
    for (let col = 0; col < columns; col++){
      matrix[row][col] = (columns * row) + col + 1;
    }
  }
  
  queries.forEach((query) => {
    let order = [];
      
    const [row1, col1, row2, col2] = query;
    for(let row = row1; row < row2; row++) order.push(matrix[row][col1-1])
    for(let col = col1; col < col2; col++) order.push(matrix[row2-1][col])
    for(let row = row2; row > row1; row--) order.push(matrix[row-2][col2-1])
    for(let col = col2; col > col1; col--) order.push(matrix[row1-1][col-2])
      
    order.push(order.shift());
    answer.push(Math.min(...order))
      
    for(let row = row1; row < row2; row++) matrix[row][col1-1] = order.shift()
    for(let col = col1; col < col2; col++) matrix[row2-1][col] = order.shift()
    for(let row = row2; row > row1; row--) matrix[row-2][col2-1] = order.shift()
    for(let col = col2; col > col1; col--) matrix[row1-1][col-2] = order.shift()
  })
  return answer
}