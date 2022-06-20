// 효율성 좋은 코드

function solution(s) {
  var answer = [];
  let oneStr = '';
  let removeZeroCnt = 0;
  let changeCnt = 0;

  while (s.length > 1) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '1') {
        oneStr += s[i];
      }
    }

    removeZeroCnt += s.length - oneStr.length;
    s = oneStr.length.toString(2);
    changeCnt++;
    oneStr = '';
  }

  answer = [changeCnt, removeZeroCnt];
  return answer;
}

// 효율성 떨어지는 코드

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
