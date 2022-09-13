// 주어진 배열에서 연속된 2개의 요소의 합이 같다면 true를 return

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const sumMap = new Map();

  for (let i = 0; i < nums.length - 1; i++) {
    const sum = nums[i] + nums[i + 1];
    if (sumMap.has(sum)) return true;
    sumMap.set(sum);
  }

  return false;
};
