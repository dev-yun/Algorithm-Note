function solution(s) {
  var answer = [];
  let removeZeroCnt = 0;
  let changeCnt = 0;

  while (s.length > 1) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '0') {
        s = s.replace(s[i], '');
        removeZeroCnt++;
        i = 0;
      }
    }

    const sLen = s.length;
    s = sLen.toString(2);
    changeCnt++;
  }

  answer = [changeCnt, removeZeroCnt];
  return answer;
}
