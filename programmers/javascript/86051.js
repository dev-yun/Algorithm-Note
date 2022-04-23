function solution(numbers) {
  var answer = 0;
  
  for (let i = 0; i < 10; i++){
  numbers.includes(i) ? answer : answer += i
  }
  return answer;
}