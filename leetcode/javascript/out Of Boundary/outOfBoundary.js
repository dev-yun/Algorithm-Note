/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
 var findPaths = function(m, n, maxMove, startRow, startColumn) {
  const limit = 1e9 + 7;
  const memo = Array.from({length: m}, () => Array.from({length: n}, () => new Array(maxMove + 1).fill(-1)));
  
  const find = (m, n, N, i, j) => {
    if (i >= m || j >= n || i < 0 || j < 0) return 1;
    if (!N) return 0;
    
    const memoized = memo[i][j][N];
    if (memoized > -1) return memoized;
    
    const result = (
         find(m, n, N - 1, i - 1, j) + find(m, n, N - 1, i + 1, j)
       + find(m, n, N - 1, i, j - 1) + find(m, n, N - 1, i, j + 1)
    ) % limit;
    memo[i][j][N] = result;
    return result;
  };
  
  return find(m, n, maxMove, startRow, startColumn);
};