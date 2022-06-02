function solution(num, count = 0) {
  if (num === 1) return count;
  else if (count > 500) return -1;

  if (num % 2 === 0) {
    num = num / 2;
    count++;
    return solution(num, count);
  } else {
    num = num * 3 + 1;
    count++;
    return solution(num, count);
  }
}
