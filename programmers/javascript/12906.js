function solution(arr) {
  var answer = [];
  arr.forEach((e, idx) => {
    if (e !== arr[idx + 1]) {
      answer.push(e);
    }
  });

  return answer;
}
