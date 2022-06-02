function solution(n) {
  let sqrtValue = Math.sqrt(n);
  const isInt = Number.isInteger(sqrtValue);

  return isInt ? Math.pow(sqrtValue + 1, 2) : -1;
}
