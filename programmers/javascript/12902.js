function solution(n) {
  const dp = Array.from({ length: n / 2 + 1 }, () => 0);
  dp[1] = 3;
  dp[2] = 11;

  for (let num = 3; num <= n / 2; num++) {
    let temp = dp[num - 1] * 4 - dp[num - 2];
    dp[num] = temp > 0 ? temp % 1000000007 : temp + 1000000007;
  }

  return dp[n / 2];
}
