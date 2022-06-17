// 주어진 문자열 s의 subStirng을 구하는 문제
// subString의 조건은 중복되는 문자가 없어야한다.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let subStr = '';

  for (let i = 0; i < s.length; i++) {
    subStr = subStr.substring(subStr.indexOf(s[i]) + 1);
    subStr += s[i];

    if (subStr.length > maxLength) maxLength = subStr.length;
  }

  return maxLength;
};
