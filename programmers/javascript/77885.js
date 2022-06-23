function solution(numbers) {
  var answer = [];

  numbers.forEach((number) => {
    const binary = number.toString(2);

    if (binary[binary.length - 1] === '0') answer.push(number + 1);
    else {
      const oneCnt = findConsecutive1S(binary);
      answer.push(number + 2 ** (oneCnt - 1));
    }
  });

  return answer;
}

const findConsecutive1S = (str) => {
  let cnt = 0;
  let endIdx = str.length - 1;
  while (str[endIdx] === '1') {
    endIdx--;
    cnt++;
  }
  return cnt;
};
