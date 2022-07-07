// s1과 s2를 번갈아 사용하여 s3를 만들 수 있는지 구하는 문제
// s1 = s1[0] ~ s1[i];
// s2 = s2[0] ~ s2[j];
// 조건. s3에 번갈아가며 들어가는 s1과 s2의 index의 차이는 1이상 될 수 없다.

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  var dp = {};
  if (s3.length !== s1.length + s2.length) return false;
  return helper(s1, s2, s3, 0, 0, 0, dp);
};

var helper = function (s1, s2, s3, i, j, k, dp) {
  var res = false;

  if (k >= s3.length) return true;
  if (dp['' + i + j + k] !== undefined) return dp['' + i + j + k];

  if (s3[k] === s1[i] && s3[k] === s2[j]) {
    res =
      helper(s1, s2, s3, i + 1, j, k + 1, dp) ||
      helper(s1, s2, s3, i, j + 1, k + 1, dp);
  } else if (s3[k] === s1[i]) {
    res = helper(s1, s2, s3, i + 1, j, k + 1, dp);
  } else if (s3[k] === s2[j]) {
    res = helper(s1, s2, s3, i, j + 1, k + 1, dp);
  }

  dp['' + i + j + k] = res;

  return res;
};
