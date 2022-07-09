/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    prevArr = nums.slice(0, i);
    nextArr = nums.slice(i + 1, nums.length);
    if (!prevArr.concat(nextArr).includes(nums[i])) return nums[i];
  }
};

var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i];
  }
};
