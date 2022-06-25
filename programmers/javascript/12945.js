// dp 방법

function solution(n) {
  let dp = Array.from({ length: n }, () => []);

  dp[0] = 0;
  dp[1] = 1;
  for (let num = 2; num <= n; num++) {
    dp[num] = (dp[num - 1] + dp[num - 2]) % 1234567;
  }

  return dp[n];
}

// 재귀 방법

function solution(n) {
  const fibo = (num) => {
    if (num === 1) return 1;
    else if (num === 0) return 0;
    let result = (fibo(num - 1) + fibo(num - 2)) % 1234567;
    return result;
  };

  return fibo(n);
}
