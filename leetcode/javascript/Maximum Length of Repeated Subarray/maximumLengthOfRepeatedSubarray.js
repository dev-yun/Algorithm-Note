/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let output = 0;
  const n1Len = nums1.length;
  const n2Len = nums2.length;
  const dp = Array.from({ length: n1Len }, () => new Array(n2Len).fill(0));

  for (let i = 0; i < n1Len; i++) {
    for (let j = 0; j < n2Len; j++) {
      if (nums1[i] === nums2[j]) {
        if (i === 0 || j === 0) dp[i][j] = 1;
        else dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      output = Math.max(output, dp[i][j]);
    }
  }

  return output;
};

var findLength = function (nums1, nums2) {
  let output = 0;
  let tmpCnt = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let nums1Idx = i;
      let nums2Idx = j;
      while (
        nums1[nums1Idx] === nums2[nums2Idx] &&
        nums1[nums1Idx] !== undefined &&
        nums2[nums2Idx] !== undefined
      ) {
        tmpCnt++;
        nums1Idx++;
        nums2Idx++;
      }
      output = Math.max(output, tmpCnt);
      tmpCnt = 0;
    }
  }

  return output;
};
