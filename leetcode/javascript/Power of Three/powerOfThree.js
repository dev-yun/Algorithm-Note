// 주어진 n이 3의 거듭제곱이면 true, 아니면 false 반환

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  const dividedThree = (n) => {
    if (n === 1) return true;

    if (n % 3 !== 0) return false;

    return dividedThree(n / 3);
  };

  return dividedThree(n);
};
