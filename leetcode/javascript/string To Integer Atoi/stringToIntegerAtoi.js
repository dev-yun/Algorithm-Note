// 조건에 맞게 주어진 문자열을 변형시키는 문제이다.
// 조건 1. 선행 공백은 무시한다.
// 조건 2. 부호를 확인하여 + or 없으면 양수, -면 음수를 반환한다.
// 조건 3. -(2**31) ~ 2**31 - 1 범위 내의 결과면 그대로, 벗어나면 -(2**31) or 2**31 -1 값을 반환한다.
// 조건 4. 주어진 문자열에서 숫자보다 문자열이 먼저 나타날 경우 0을 반환한다.
// 조건 5. 숫자가 아닌 문자열은 무시한다.

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let answer = 0;
  let isPositive = true;
  const intMax = 2 ** 31 - 1;
  const intMin = -(2 ** 31);
  let numStr = '';
  let removeSpaceStr = s.trimStart();

  if (removeSpaceStr[0] === '+') {
    isPositive = true;
    removeSpaceStr = removeSpaceStr.substring(1);
  } else if (removeSpaceStr[0] === '-') {
    isPositive = false;
    removeSpaceStr = removeSpaceStr.substring(1);
  }

  for (let i = 0; i < removeSpaceStr.length; i++) {
    if (isNaN(Number(removeSpaceStr[i])) || removeSpaceStr[i] === ' ') break;
    else {
      numStr += removeSpaceStr[i];
    }
  }

  if (isPositive && numStr.length > 0) {
    answer = parseInt(numStr);
  } else if (!isPositive && numStr.length > 0) {
    answer = -parseInt(numStr);
  } else return 0;

  if (answer >= intMax) return intMax;
  else if (answer < intMin) return intMin;
  else return answer;
};
