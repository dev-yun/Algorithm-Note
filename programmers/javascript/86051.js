function solution(numbers) {
  var answer = 0;
  
  for (let i = 0; i < 10; i++){
  numbers.includes(i) ? answer : answer += i
  }
  return answer;
}


// 다른 풀이

function solution(numbers) {
  var answer = 45;
  
  numbers.map(e => answer -= e);
  return answer;
}