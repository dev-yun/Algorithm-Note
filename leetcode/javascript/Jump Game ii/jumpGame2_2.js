// 각 index의 값은 현재 뛸수있는 최장거리이다.
// 가장 적은 점프를 하여 마지막 인덱스로 도달할 수 있는 경우의 수를 구하여라

/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
  let maxLen = 0;
  let jump = 0;
  let current = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxLen = Math.max(maxLen, nums[i] + i);
    if (i == current) {
      current = maxLen;
      jump++;
    }
  }

  return jump;
};

jump([2, 3, 1, 1, 4]);
