/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
 var numSubmatrixSumTarget = function(g, target) {
  let n = g.length;
  let m = g[0].length;
  let res = 0;
  for (let i = 0; i < n; i++) {
      for (let j = 1; j < m; j++) {
          g[i][j] += g[i][j - 1];
      }
  }
  for (let i = 0; i < m; i++) {
      for (let j = i; j < m; j++) {
          let matrix = new Map();
          matrix.set(0, 1);
          let cur = 0;
          for (let k = 0; k < n; k++) {
              cur += g[k][j] - (i > 0 ? g[k][i - 1] : 0);
              res += matrix.get(cur - target) || 0;
              matrix.set(cur, matrix.get(cur) + 1 || 1);
          }
      }
  }
  return res;
};