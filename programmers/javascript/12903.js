function solution(s) {
  var answer = '';
  let midIdx = parseInt(s.length / 2);

  s.length % 2 === 0
    ? (answer = s.slice(midIdx - 1, midIdx + 1))
    : (answer = s[midIdx]);

  return answer;
}
