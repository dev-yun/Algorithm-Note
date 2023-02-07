/**
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function (fruits) {
  let max = 0;
  let sum = 0;
  let n1,
    n2,
    idx1 = -1,
    idx2 = -1;

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === n1 || fruits[i] === n2) {
      sum++;
      if (n1 !== fruits[i]) {
        [n1, n2] = [n2, n1];
        idx2 = idx1;
      }
    } else {
      sum = i - idx2;
      n2 = n1;
      n1 = fruits[i];
      idx2 = idx1;
    }
    idx1 = i;
    max = Math.max(max, sum);
  }
  return max;
};
