/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  
  let ans = 0;
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j]) {
              ans = Math.max(ans, dfs(i, j));
          }
      }
  }
  
  function dfs(i, j) {
      if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
          return 0;
      }
      
      grid[i][j] = 0;
      
      return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  }
  
  return ans;
};