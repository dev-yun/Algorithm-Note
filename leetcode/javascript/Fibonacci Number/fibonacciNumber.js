// 피보나치 수를 구하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let output = 0;
  let num1 = 1;
  let num2 = 0;

  if (n === 0) return 0;
  if (n === 1) return 1;

  for (let num = 2; num <= n; num++) {
    output = num1 + num2;
    [num1, num2] = [output, num1];
  }

  return output;

  //     const fibo = (n) => {
  //         if(n === 1) return 1;
  //         if(n === 0) return 0;

  //         return fibo(n-1) + fibo(n-2);
  //     }

  //     return fibo(n)

  //     const dp = new Array(n).fill(0);
  //     dp[0] = 0;
  //     dp[1] = 1;

  //     for(let num = 2; num <= n; num++){
  //         dp[num] = dp[num-1] + dp[num-2];
  //     }

  //     return dp[n];
};
