// two pointer 방법으로 풀이
// token[i]가 power보다 작으면 score++ && power -= token[i]
// token[i]가 power보다 크면
//  1. score >= 1인 경우 : score-- && power += token[i]
//  2. score = 0인 경우 : 종료

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  let faceUpIdx = 0;
  let faceDownIdx = tokens.length - 1;
  let score = 0;

  tokens.sort((a, b) => a - b);

  while (faceUpIdx <= faceDownIdx) {
    if (tokens[faceUpIdx] <= power) {
      power -= tokens[faceUpIdx];
      score += 1;
      faceUpIdx++;
    } else {
      if (faceUpIdx === faceDownIdx) {
        break;
      }

      if (score >= 1) {
        power += tokens[faceDownIdx];
        score -= 1;
        faceDownIdx--;
      } else {
        return 0;
      }
    }
  }

  return score;
};
