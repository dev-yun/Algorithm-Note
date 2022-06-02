function solution(s) {
  let sToArr = s.split('');
  let cntWord = 0;

  for (let i = 0; i < sToArr.length; i++) {
    if (s[i] === ' ') {
      cntWord = 0;
      continue;
    }
    if (cntWord % 2 === 0) {
      sToArr[i] = sToArr[i].toUpperCase();
      cntWord++;
    } else {
      sToArr[i] = sToArr[i].toLowerCase();
      cntWord++;
    }
  }

  return sToArr.join('');
}
