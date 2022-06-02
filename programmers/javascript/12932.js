function solution(n) {
  var answer = [];

  let nArr = n.toString().split('');

  nArr.forEach((e) => answer.push(parseInt(e)));
  answer.reverse();

  return answer;
}
