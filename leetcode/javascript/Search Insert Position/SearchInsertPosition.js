// nums에 target이 있으면 해당 index 반환, 없으면 target이 들어갈 index 반환
// nums는 정렬된 숫자 배열

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target)) {
      if (nums[i] === target) return i;
    } else {
      if (nums[i] < target) continue;
      else return i;
    }
  }
  return nums.length;
};
