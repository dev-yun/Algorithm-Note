// 주어진 배열을 통해 길이가 3이상인 오름차순 sub배열을 만들 수 있는지 구하는 문제

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const hash = new Map();
  const need = new Map();

  nums.forEach((num) => {
    hash.has(num) ? hash.set(num, hash.get(num) + 1) : hash.set(num, 1);
  });

  for (const num of nums) {
    const current = hash.get(num);
    if (current === 0) continue;

    const currentNeed = need.get(num);
    const next1 = hash.get(num + 1);
    const next2 = hash.get(num + 2);
    if (currentNeed > 0) {
      const need1 = need.get(num + 1) ?? 0;
      need.set(num, currentNeed - 1);
      need.set(num + 1, need1 + 1);
    } else if (next1 > 0 && next2 > 0) {
      const need3 = need.get(num + 3) ?? 0;
      hash.set(num + 1, next1 - 1);
      hash.set(num + 2, next2 - 1);
      need.set(num + 3, need3 + 1);
    } else {
      return false;
    }
    hash.set(num, current - 1);
  }
  return true;
};
