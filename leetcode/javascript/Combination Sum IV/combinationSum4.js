/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 0;

  for (let curTarget = 1; curTarget <= target; curTarget++) {
    for (let num of nums) {
      if (curTarget - num >= 0) {
        if (curTarget === num) {
          dp[curTarget] += 1;
        } else {
          dp[curTarget] += dp[curTarget - num];
        }
      }
    }
  }
  return dp[target];
};
