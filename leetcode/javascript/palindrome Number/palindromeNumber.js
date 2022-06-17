// 주어진 수 x를 뒤집어도 같은 수인지 판단하는 문제

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xStr = x.toString();
  let start = 0;
  let end = xStr.length - 1;

  while (start < end) {
    if (xStr[start] === xStr[end]) {
      start++;
      end--;
    } else return false;
  }

  return true;
};
