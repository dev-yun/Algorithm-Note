// 2개의 배열 nums와 multipliers가 주어진다.
// multipliers는 요소의 index 순으로 숫자를 선택하고
// nums는 가장 앞 또는 가장 뒤 요소를 선택한다.
// nums와 multipliers의 곱의 합이 가장 큰 경우의 값을 구하여라

/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (nums, multipliers) {
  const n = nums.length;
  const m = multipliers.length;
  const dp = new Array(m + 1).fill(0);

  for (let mNum = m - 1; mNum >= 0; mNum--) {
    const nextRow = [...dp];

    for (let nNum = mNum; nNum >= 0; nNum--) {
      dp[nNum] = Math.max(
        multipliers[mNum] * nums[nNum] + nextRow[nNum + 1],
        multipliers[mNum] * nums[n - 1 - (mNum - nNum)] + nextRow[nNum]
      );
    }
  }

  return dp[0];
};
