/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  let max1 = 0
  let max2 = 0
  for (let i = 0; i < nums.length; i++) {
      [max1, max2] = [max2, Math.max(nums[i] + max1, max2)]
  }
  return max2
};
