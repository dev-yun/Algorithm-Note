// n은 반환 숫자의 자리수, k는 반환 숫자의 인접한 자리수끼리의 차의 절대값을 의미한다.
// 모든 가능한 반환 숫자를 return 하여라
// 조건 : 0으로 시작하는 수는 올 수 없다.
// 2 <= n <= 9, 0 <= k <= 9

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
  const output = [];

  const DFS = (n, num) => {
    if (n === 0) return output.push(num);

    const lastDigit = num % 10;

    const nextDigits = new Set([lastDigit - k, lastDigit + k]);

    for (const nextDigit of nextDigits) {
      if (0 <= nextDigit && nextDigit < 10) {
        const newNum = num * 10 + nextDigit;
        DFS(n - 1, newNum);
      }
    }
  };

  for (let num = 1; num < 10; num++) {
    DFS(n - 1, num);
  }

  return output;
};
