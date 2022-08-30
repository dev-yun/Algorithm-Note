// 주어진 2차원 배열을 시계방향으로 회전시켜 반환하는 문제
// 주의사항 : 새로운 배열을 만들지 말고 기존 배열을 변경시키는 방향으로 진행

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (i = 0; i < row; i++) {
    matrix[i].reverse();
  }
  return matrix;
};
