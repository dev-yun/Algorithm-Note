/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let sum = 0;
  let maxVal = 0;

  for (let i = 0; i < k; i++) {
    sum += cardPoints[i];
  }

  maxVal = sum;

  for (let i = k - 1, j = cardPoints.length - 1; i >= 0; i--, j--) {
    sum = sum - cardPoints[i] + cardPoints[j];
    maxVal = Math.max(sum, maxVal);
  }

  return maxVal;
};
