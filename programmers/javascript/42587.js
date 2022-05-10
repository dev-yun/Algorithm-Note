function solution(priorities, location) {
  var answer = '';
  const resultArr = [];
  const printerArr = priorities.map((e, idx) => [idx, e]);

  priorities.sort((a, b) => a - b);

  while (printerArr.length > 0) {
    curElement = printerArr.shift();

    if (curElement[1] < Math.max(...priorities)) {
      printerArr.push(curElement);
    } else {
      resultArr.push(curElement);
      priorities.pop();
    }
  }

  resultArr.forEach((e, idx) => {
    if (e[0] === location) answer = idx + 1;
  });

  return answer;
}
