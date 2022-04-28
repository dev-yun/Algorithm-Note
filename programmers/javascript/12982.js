function solution(d, budget) {
  var answer = 0;
  var total = 0;

  d.sort((a, b) => a - b);

  d.forEach((e) => {
    total += e;
    if (total <= budget) {
      answer++;
    }
  });
  return answer;
}
