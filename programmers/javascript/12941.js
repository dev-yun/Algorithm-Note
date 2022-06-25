// 효율 나쁜 풀이

function solution(A, B) {
  var answer = 0;

  while (A.length > 0) {
    let aMin = Math.min(...A);
    let bMax = Math.max(...B);
    let aMinIdx = A.indexOf(aMin);
    let bMaxIdx = B.indexOf(bMax);
    answer += aMin * bMax;

    A.splice(aMinIdx, 1);
    B.splice(bMaxIdx, 1);
  }

  return answer;
}

// 효율 좋은 풀이

function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
