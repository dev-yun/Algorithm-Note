function solution(n) {
  var answer = 0;
  answer = checkSum(n, 1, answer);
  return answer;
}

const checkSum = (n, startNum, cnt) => {
  let sum = 0;
  for(let i = startNum; i <= n; i++){
      sum += i;
      console.log(n, i, cnt)
      if(sum > n){
          return checkSum(n, startNum+1, cnt);
      }else if(sum === n){
          cnt++;
          return checkSum(n, startNum+1, cnt);
      }
  }
  return cnt;
}