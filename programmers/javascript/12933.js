function solution(n) {
  var answer = [];
  let nArr = n.toString().split('');

  nArr.sort((a, b) => b - a);

  return parseInt(nArr.join(''));
}
