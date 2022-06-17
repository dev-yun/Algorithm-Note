// 일반적인 문자열 s를 지그재그 형태로 바꿨을때 변환되는 문자열을 구하는 문제이다.

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let answer = new Array(numRows).fill('');
  let patternLen = (numRows - 1) * 2;

  if (numRows < 2) return s;

  for (let i = 0; i < s.length; i++) {
    let patternidx = i % patternLen;
    if (patternidx < numRows) answer[patternidx] += s[i];
    else answer[patternLen - patternidx] += s[i];
  }

  return answer.join('');
};
