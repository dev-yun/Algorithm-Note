function solution(queue1, queue2) {
  let count = 0;
  let queue1Index = 0;
  let queue2Index = 0;
  let queue1Sum = queue1.reduce((acc, cur) => (acc += cur), 0);
  let queue2Sum = queue2.reduce((acc, cur) => (acc += cur), 0);
  const maxCount = queue1.length * 3;

  if ((queue1Sum + queue2Sum) % 2 !== 0) {
    return -1;
  }

  while (queue1Sum !== queue2Sum) {
    if (queue1Sum > queue2Sum) {
      const popValue = queue1[queue1Index];
      queue2.push(popValue);

      queue1Sum -= popValue;
      queue2Sum += popValue;
      queue1Index += 1;
      count += 1;
    } else {
      const popValue = queue2[queue2Index];
      queue1.push(popValue);

      queue1Sum += popValue;
      queue2Sum -= popValue;
      queue2Index += 1;
      count += 1;
    }
    if (count > maxCount) return -1;
  }
  return count;
}
