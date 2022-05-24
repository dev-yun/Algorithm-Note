// 하나의 긴 문자열에서 특정 서브 문자열을 찾는 방법
// "abcaaabbccabc" 에서 "abc"를 찾으면 2개가 있다.

function naiveStringSearch(mainArr, subArr) {
  let count = 0;
  let subArrIndex = 0;
  for (let i = 0; i < mainArr.length; i++) {
    if (mainArr[i] === subArr[subArrIndex]) {
      if (mainArr.substr(i, subArr.length) === subArr) count++;
    }
  }
  return count;
}
