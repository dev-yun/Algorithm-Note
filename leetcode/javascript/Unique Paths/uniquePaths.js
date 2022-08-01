// m*n 행렬이 주어질때 로봇은 [0][0]에서 출발해서 [m-1][n-1]로 도착하려한다.
// 이때 로봇이 도착지에 갈 수 있는 방법의 수를 구하여라
// 조건 : 로봇은 오른쪽가 아래로만 이동할 수 있다.

// DP 방법

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    const dp = Array.from({length : m}, () => Array(n).fill(1));
    
    for(let row = 1; row < m; row++){
        for(let col = 1; col < n; col++){
            dp[row][col] = dp[row-1][col] + dp[row][col-1];
        }
    }
    
    return dp[m-1][n-1];
}

// 재귀 방법

// var uniquePaths = function(m, n) {
    
//     const re = (row, col) => {
//         if(row > m || col > n){
//             return 0;
//         }else if(row === m && col === n){
//             return 1;
//         }
        
//         return re(row+1, col) + re(row, col+1);
//     }
    
//     return re(1, 1)
// };