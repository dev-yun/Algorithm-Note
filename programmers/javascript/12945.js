function solution(n) {
  let dp = Array.from({ length: n }, () => []);

  dp[0] = 0;
  dp[1] = 1;
  for (let num = 2; num <= n; num++) {
    dp[num] = (dp[num - 1] + dp[num - 2]) % 1234567;
  }

  return dp[n];
}
