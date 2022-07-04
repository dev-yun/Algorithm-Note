// 모든 아이에게 캔디를 나눠줄 수 있는 최소의 개수를 구하는 문제
// ratings : 순위 (높은 아이가 더 사탕을 많이 받을 수 있다.)
// 조건 1. 모든 아이는 최소 1개의 사탕을 받아야한다.
// 조건 2. 이웃한 아이들끼리는 더 높은 rating을 갖는 아이가 더 많은 캔디를 받을 수 있다.

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let output = 0;
  let candyArr = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] < ratings[i]) candyArr[i] = candyArr[i - 1] + 1;
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candyArr[i] = Math.max(candyArr[i], candyArr[i + 1] + 1);
    }
  }

  output = candyArr.reduce((acc, cur) => acc + cur);
  return output;
};
