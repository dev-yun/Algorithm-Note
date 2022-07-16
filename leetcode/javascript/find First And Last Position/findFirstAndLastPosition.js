// 주어진 nums에서 target 값이 
// 처음 나오는 index번호와 마지막으로 나오는 index번호를 찾아 반환하는 문제

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const first = nums.indexOf(target)
  const last = nums.lastIndexOf(target)

  return [first, last]
}
