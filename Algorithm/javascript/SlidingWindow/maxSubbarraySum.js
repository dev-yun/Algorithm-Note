// accepts an array and number n

// 1. ㅂㅣㅎㅛㅇㅠㄹㅈㅓㄱ (O(N^2))
//   ㅁㅐㅂㅓㄴ ㅅㅐㄹㅗㅇㅜㄴ ㅂㅐㅇㅕㄹ tempㄹㅡㄹ ㅁㅏㄴㄷㅡㄹㅇㅓㅇㅑㅎㅏㄴㄷㅏ.
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

// 2. ㅎㅛㅇㅠㄹㅈㅓㄱ (O(N))
//   tempㅇㅕㄱㅎㅏㄹㅇㅡㄹ ㅎㅏㄴㅡㄴ tempSumㅇㅡㄹ ㅁㅏㄴㄷㅡㄹㄱㅗ
//   ㅇㅣㅈㅓㄴ ㅇㅛㅅㅜㄹㅡㄹ ㅃㅐㄱㅗ ㄷㅏㅇㅡㅁ ㅇㅛㅅㅗㄹㅡㄹ ㄷㅓㅎㅏㄴㅡㄴ ㅅㅣㄱㅇㅡ
//   ㅅㅣㄱㅇㅡㄹㅗ ㅈㅣㄴㅎㅐㅇㅎㅏㄴㄷㅏ.
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
