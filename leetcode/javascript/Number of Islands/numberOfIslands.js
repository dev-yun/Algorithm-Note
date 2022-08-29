// "1"은 땅, "0"은 바다를 의미한다.
// 상하좌우가 "0"이라면 섬으로 취급하는데, 주어진 grid에서 섬의 개수를 구하는 문제이다.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;
  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j, m, n);
        count++;
      }
    }
  }
  return count;
};

function dfs(gd, i, j, m, n) {
  if (i < 0 || j < 0 || i >= m || j >= n) return;
  if (gd[i][j] !== "1") return;

  gd[i][j] = "0";

  dfs(gd, i + 1, j, m, n);
  dfs(gd, i - 1, j, m, n);
  dfs(gd, i, j + 1, m, n);
  dfs(gd, i, j - 1, m, n);
}
