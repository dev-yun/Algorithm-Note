// accepts an array and number n

// 1. 비효율적 (O(N^2))
//   매번 새로운 배열 temp를 만들어야 함.
const maxSubbarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
};

// 2. 효율적 (O(N))
//   temp역할을 하는 tempSum을 만들고
//   이전 element를 빼고 다음 element를 더하는 식으로 진행
const maxSubbarraySumUsingSlide = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = 0; i < arr.length; i++) {
    tempSum = tempSum - arr[i] + arr[n + i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};
