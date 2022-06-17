/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let answer = 0;
  if (x > 0) {
    answer = parseInt(x.toString().split('').reverse().join(''));
  } else if (x < 0) {
    answer = x.toString().split('').slice(1);
    answer = parseInt(answer.reverse().join(''));
    answer *= -1;
  } else return 0;

  return answer >= -(2 ** 31) && answer < 2 ** 31 ? answer : 0;
};
