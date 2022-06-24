function solution(msg) {
  var answer = [];
  const LZW = [
    '',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  for (let idx = 0; idx < msg.length; idx++) {
    let strLen = idx + 1;
    let subStr = '';
    while (LZW.includes(msg.slice(idx, strLen)) && strLen <= msg.length) {
      subStr = msg.slice(idx, strLen);
      strLen++;
    }

    if (LZW.includes(subStr)) {
      answer.push(LZW.indexOf(subStr));
      if (!LZW.includes(msg.slice(idx, strLen)))
        LZW.push(msg.slice(idx, strLen));
      if (subStr.length > 1) idx += subStr.length - 1;
    }
  }
  return answer;
}
