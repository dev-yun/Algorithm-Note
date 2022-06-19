function solution(s) {
  var answer = false;
  let leftBracketCnt = 0;
  let rightBracketCnt = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[0] !== '(') return false;

    if (s[i] === '(') leftBracketCnt += 1;
    else if (s[i] === ')') rightBracketCnt += 1;

    if (leftBracketCnt < rightBracketCnt) return false;
  }

  leftBracketCnt === rightBracketCnt ? (answer = true) : (answer = false);

  return answer;
}
