function solution(str1, str2) {
  var answer = 0;
  let str1Map = new Map();
  let str2Map = new Map();
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  sliceStr(str1, str1Map);
  sliceStr(str2, str2Map);

  let intersectionCnt = 0;
  let unionCnt = 0;
  for (let s2Cnt of str2Map.values()) unionCnt += s2Cnt;
  for (let s1 of str1Map) {
    const [str, cnt] = s1;
    if (str2Map.has(str) && str2Map.get(str) >= str1Map.get(str))
      intersectionCnt += cnt;
    else if (str2Map.has(str) && str2Map.get(str) < str1Map.get(str)) {
      intersectionCnt += str2Map.get(str);
      unionCnt += str1Map.get(str) - str2Map.get(str);
    } else unionCnt += cnt;
  }

  if (unionCnt === 0) return 65536;

  answer = Math.floor((intersectionCnt / unionCnt) * 65536);

  return answer;
}

const sliceStr = (str, strMap) => {
  const regChar = /[A-Z]/;
  for (let i = 0; i < str.length - 1; i++) {
    if (regChar.test(str[i]) && regChar.test(str[i + 1])) {
      const subStr = str.substr(i, 2);
      strMap.has(subStr)
        ? strMap.set(subStr, strMap.get(subStr) + 1)
        : strMap.set(subStr, 1);
    }
  }
};
