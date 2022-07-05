// 주어진 배열에서 오름차순으로 가장 길게 연속된 숫자 배열의 크기를 구하는 문제
// 무조건 O(n) 이하의 시간복잡도를 갖어야함

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let output = 0;
  let sequenceNum = 1;

  nums = [...new Set(nums.sort((a, b) => a - b))];

  if (nums.length === 1) return 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) sequenceNum++;
    else sequenceNum = 1;

    output = Math.max(output, sequenceNum);
  }

  return output;
};
