// 조합을 모두 구해서 k번째를 구할 수 있지만
// 조합의 규칙을 통해 k번째를 구할 수 있을듯 하다.

// n명이 있다면 0번 인덱스는 n * (n-1)! 값이 채워질것이고

function solution(n, k) {
  const base = Array.from({ length: n }, (_, i) => i + 1);
  var answer = [];
  k -= 1;

  while (true) {
    n--;
    if (k === 0) {
      base.forEach((num) => {
        if (!answer.includes(num)) answer.push(num);
      });
      break;
    }
    const index = Math.floor(k / factorial(n));
    k = k % factorial(n);
    answer.push(base[index]);
    base.splice(index, 1);
  }

  return answer;
}

const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};
