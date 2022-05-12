function solution(queue1, queue2) {
  let targetNum = 0;
  let queue1TmpValue = 0;
  let queue2TmpValue = 0;
  let cnt = 0;

  let total = getArrSum(queue1) + getArrSum(queue2);

  if (total % 2 === 0) {
    targetNum = total / 2;
  } else return -1;

  console.log(targetNum, total);

  while (getArrSum(queue1) !== targetNum) {
    if (getArrSum(queue1) < targetNum) {
      queue2TmpValue = queue2.shift();
      if (queue2TmpValue > targetNum) {
        return -1;
      }
      queue1.push(queue2TmpValue);
      cnt++;
    } else {
      queue1TmpValue = queue1.shift();
      if (queue1TmpValue > targetNum) {
        return -1;
      }
      queue2.push(queue1TmpValue);
      cnt++;
    }
  }

  return cnt;
}

const getArrSum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};
