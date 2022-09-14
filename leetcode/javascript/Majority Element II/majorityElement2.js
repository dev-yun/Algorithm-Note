// 주어진 nums 배열에서 (nums배열의 크기 / 3)번 보다 많이 나타나는 요소를 구하여라.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const output = [];
  const targetNum = Math.floor(nums.length / 3);
  const numsMap = new Map();

  nums.forEach((num) => {
    if (numsMap.has(num)) {
      numsMap.set(num, numsMap.get(num) + 1);
    } else {
      numsMap.set(num, 1);
    }
  });

  for (const [num, count] of numsMap) {
    if (count > targetNum) {
      output.push(num);
    }
  }

  return output;
};
