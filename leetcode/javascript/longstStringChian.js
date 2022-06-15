// wordA, wordB가 있을때 문자열 wordA에 하나의 문자를 추가한 wordB와 wordA 관계가 predecessor가 된다.
// 조건 1. wordA와 wordB의 문자열 길이 차이는 1이여야 한다.
// 조건 2. wordB는 wordA의 구성을 그대로 따라가고 새로운 문자 하나만 추가되어야 한다.
// 예) abc는 abcd의 predecessor, abc는 adcb의 predecessor이 아님, abc는 abcde의 predecessor이 아님

// dp를 통해 구현
var longestStrChain = function (words) {
  const predecessorArr = new Array(words.length).fill(1);
  let max = 0;
  words.sort((a, b) => a.length - b.length);

  for (let i = words.length - 1; i >= 0; i--) {
    for (let j = words.length - 1; j > i; j--) {
      if (isPredecessor(words[i], words[j])) {
        predecessorArr[i] = Math.max(predecessorArr[i], 1 + predecessorArr[j]);
      }
    }
    max = Math.max(max, predecessorArr[i]);
  }
  return max;
};

const isPredecessor = (wordA, wordB) => {
  if (wordB.length - wordA.length !== 1) return false;

  for (let i = 0; i < wordB.length; i++) {
    const word = wordB.slice(0, i) + wordB.slice(i + 1);
    if (word === wordA) {
      return true;
    }
  }
  return false;
};
