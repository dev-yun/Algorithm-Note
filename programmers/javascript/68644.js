function solution(numbers) {
  var answer = [];

  numbers.forEach((e, idx) => {
    for (let i = idx + 1; i < numbers.length; i++) {
      answer.push(e + numbers[i]);
    }
  });

  answer = new Set(answer);
  answer = Array.from(answer).sort((a, b) => a - b);
  return answer;
}
