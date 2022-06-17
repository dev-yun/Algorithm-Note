// 주어진 문자열 s에서 뒤집어도 같은 sub문자열 중 제일 긴 값을 찾는 문제

var longestPalindrome = function (s) {
  let longestPal = '';

  const getLongestPalindrome = (startIdx, endIdx) => {
    while (startIdx >= 0 && endIdx < s.length && s[startIdx] === s[endIdx]) {
      // 기준 index의 이전과 이후를 비교하기 위해.
      startIdx--;
      endIdx++;
    }

    // 기존 longestPal보다 긴 경우 update
    if (endIdx - startIdx > longestPal.length) {
      longestPal = s.slice(startIdx + 1, endIdx);
    }
  };

  for (let i = 0; i < s.length; i++) {
    // 짝수 palendrome인 경우
    getLongestPalindrome(i, i + 1);

    // 홀수 palendrome인 경우
    getLongestPalindrome(i, i);

    // 더 긴 longestPal을 찾을 수 없을 경우
    if ((s.length - i) * 2 < longestPal.length) {
      break;
    }
  }

  return longestPal;
};
