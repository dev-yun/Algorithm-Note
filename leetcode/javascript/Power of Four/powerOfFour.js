/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n <= 0) return false;

  const dividedFour = (n) => {
    if (n === 1) return true;

    if (n % 4 === 0) {
      return dividedFour(n / 4);
    } else {
      return false;
    }
  };

  return dividedFour(n);
};
