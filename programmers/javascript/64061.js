function solution(board, moves) {
  var answer = 0;
  const basket = [];
  
  moves.forEach((it) => {
      const doll = crowMachin(board,it-1);
      if(doll){
          if(basket[basket.length - 1] === doll){
              basket.pop();
              answer += 2;
          }else{
              basket.push(doll)
          }   
      }
  })
  
  return answer;
}

const crowMachin = (board, col) => {
  for (let i = 0; i<board.length; i++){
      if (board[i][col] !== 0){
          const doll = board[i][col];
          board[i][col] = 0;
          return doll;
      }
  }
}