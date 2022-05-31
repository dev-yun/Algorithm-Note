function solution(x) {
  const digitArr = findDigit(x);
  let digitSum = arrSum(digitArr);
  console.log(digitArr, digitSum);

  return x % digitSum === 0;
}

const findDigit = (x) => {
  let makeStrArr = x.toString().split('');
  let arr = makeStrArr.map((e) => parseInt(e));

  return arr;
};

const arrSum = (arr) => {
  return arr.reduce((a, b) => (a += b));
};
