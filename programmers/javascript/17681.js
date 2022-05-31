function solution(n, arr1, arr2) {
  var answer = [];
  const binaryArr1 = [];
  const binaryArr2 = [];

  arr1.forEach((e) => {
    binaryArr1.push(makeBinary(n, e));
  });

  arr2.forEach((e) => {
    binaryArr2.push(makeBinary(n, e));
  });

  for (let i = 0; i < n; i++) {
    let resultStr = '';
    for (let j = 0; j < n; j++) {
      if (parseInt(binaryArr1[i][j]) || parseInt(binaryArr2[i][j]) === 1) {
        resultStr += '#';
      } else {
        resultStr += ' ';
      }
    }
    answer.push(resultStr);
  }

  return answer;
}

const makeBinary = (n, num) => {
  return num.toString(2).padStart(n, 0);
};
