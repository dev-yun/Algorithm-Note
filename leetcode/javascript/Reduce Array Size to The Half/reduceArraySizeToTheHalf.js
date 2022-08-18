// 주어진 배열에서 유일한 요소(set)들을 구하고
// 그 요소와 같은 값을 모두 제거한다.
// 이때 배열의 크기가 원본 배열보다 절반 이하로 줄어드는 경우 제거한 요소의 개수를 구하여라()

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const baseSize = arr.length;
  const map = new Map();
  let output = 0;
  let sum = 0;

  arr.forEach((e) => {
    map.has(e) ? map.set(e, map.get(e) + 1) : map.set(e, 1);
  });

  const sortedValues = [...map.values()].sort((a, b) => b - a);

  for (let value of sortedValues) {
    sum += value;
    output++;
    if (sum >= baseSize / 2) {
      break;
    }
  }

  return output;
};
