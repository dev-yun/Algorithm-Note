/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let minGap = 10e9;
  let gap = 0;
  let output = 0;

  nums.sort((a, b) => a - b);

  for (let fixed = 0; fixed < nums.length - 2; fixed++) {
    let start = fixed + 1,
      end = nums.length - 1;
    while (start < end) {
      let sum = nums[fixed] + nums[start] + nums[end];
      gap = Math.abs(target - sum);

      if (target > sum) start++;
      else if (target < sum) end--;
      else return sum;

      if (minGap > gap) {
        minGap = gap;
        output = sum;
      }
    }
  }

  return output;
};
