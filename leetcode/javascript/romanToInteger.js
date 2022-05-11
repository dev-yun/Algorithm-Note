/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let symbol = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      answer += symbol[s[i]];
      break;
    }

    symbol[s[i]] >= symbol[s[i + 1]]
      ? (answer += symbol[s[i]])
      : (answer -= symbol[s[i]]);
  }
  return answer;
};
