function solution(n) {
  var answer = 0;
  if(n === 1) return 1;
  
  for(let i = 1; i <= Math.ceil(n/2); i++){
      if(n % i === 0) answer += i;
  }
  return answer+n;
}