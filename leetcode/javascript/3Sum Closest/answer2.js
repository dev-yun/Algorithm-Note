// target에 가장 가까운 숫자 3개의 합을 return 하여라.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let minValue = Infinity;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let leftP = i + 1;
    let rightP = nums.length - 1;

    while (leftP < rightP) {
      let sum = nums[i] + nums[leftP] + nums[rightP];

      minValue =
        Math.abs(minValue - target) < Math.abs(sum - target) ? minValue : sum;

      if (sum > target) {
        rightP--;
      } else {
        leftP++;
      }
    }
  }

  return minValue;
};
