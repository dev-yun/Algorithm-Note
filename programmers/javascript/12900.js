// dp 코드

function solution(n) {
  var answer = 0;
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  
  for(let i = 2; i < n; i++){
      dp[i] = (dp[i-1] + dp[i-2]) % 1000000007;
  }
  answer = dp[n-1]
  return answer;
}

// 순열을 사용한 풀이
function solution(n) {
  var answer = 0;
  if(n % 2 === 0){
      for(let oneLenTile = n, totalTile = n; oneLenTile >= 0; oneLenTile -= 2, totalTile--){
          answer += permutation(totalTile, oneLenTile)
      }
  }else{
      for(let oneLenTile = n, totalTile = n; oneLenTile > 0; oneLenTile -= 2, totalTile--){
          answer += permutation(totalTile, oneLenTile)
      }
  }
  return answer % 1000000007;
}

const factorial = (num) => {
  if(num === 0) return 1;
  
  return num * factorial(num - 1)
}

const permutation = (num1, num2) => {
  return factorial(num1) / (factorial(num2) * factorial(num1 - num2))
}