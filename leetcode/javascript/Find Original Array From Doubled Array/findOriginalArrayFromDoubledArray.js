// 기존 배열에서 모든 요소를 2배한뒤, 섞은 배열이 changed다
// 이때 changed가 올바른(기존 배열과 2배를 곱한 요소가 모두 존재하는) 배열인지 판단하고
// 맞다면 기존 배열을 반환하고, 아니라면 빈 배열을 반환하여라.

/**
 * @param {number[]} changed
 * @return {number[]}
 */

var findOriginalArray = function (changed) {
  let output = [];
  const hashTable = new Array(100001).fill(0);

  if (changed.length % 2 === 1) return [];

  changed.sort((a, b) => a - b);
  changed.forEach((num) => {
    changedCnt[num]++;
  });

  for (let num of changed) {
    if (!hashTable[num]) continue;
    if (!hashTable[num * 2]) return [];

    hashTable[num]--;
    hashTable[num * 2]--;
    output.push(num);
  }

  return output;
};

var findOriginalArray = function (changed) {
  let output = [];
  const isUsed = Array.from;
  if (changed.length % 2 === 1) return [];

  changed.sort((a, b) => a - b);

  for (let i = 0; i < changed.length; i++) {
    if (changed[i] === -1) continue;
    const double = changed[i] * 2;
    if (changed.slice(i + 1).includes(double)) {
      output.push(changed[i]);
      changed[i] = -1;
      changed[changed.indexOf(double)] = -1;
    }
  }

  return changed.length / 2 === output.length ? output : [];
};
