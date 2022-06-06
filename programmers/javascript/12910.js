function solution(arr, divisor) {
  var answer = [];
  const dividedArr = [];

  arr.forEach((e) => {
    if (e % divisor === 0) {
      dividedArr.push(e);
    }
  });

  answer = dividedArr.sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}
