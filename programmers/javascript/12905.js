function solution(board)
{
    var answer = 1234;
    dp = Array.from({length : board.length+1}, () => new Array(board[0].length+1).fill(0))
    let maxLen = 0;
    
    for(let x = 1; x < board.length+1; x++){
      for(let y = 1; y < board[0].length+1; y++){
        if(board[x-1][y-1] === 1){
          dp[x][y] = Math.min(dp[x-1][y-1], dp[x-1][y], dp[x][y-1]) + 1;
        }
        maxLen = maxLen > dp[x][y] ? maxLen : dp[x][y]
      }
    }
    
    answer = Math.pow(maxLen, 2);
    
    return answer;
}