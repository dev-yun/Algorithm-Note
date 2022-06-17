// 주어진 문자열 s의 subStirng을 구하는 문제
// subString의 조건은 중복되는 문자가 없어야한다.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let subStrArr = [];
  for (let i = 0; i < s.length; i++) {
    if (!subStrArr.includes(s[i])) subStrArr.push(s[i]);
    else {
      while (subStrArr.includes(s[i])) {
        subStrArr.shift();
      }
      subStrArr.push(s[i]);
    }
    maxLength = Math.max(maxLength, subStrArr.length);
  }
  return maxLength;
};
