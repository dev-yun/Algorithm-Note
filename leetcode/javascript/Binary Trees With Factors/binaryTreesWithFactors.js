// 주어진 배열을 통해 만들 수 있는 트리의 개수를 구하는 문제
// 조건 : 하위 트리의 값을 곱하면 상위 트리의 값이 되어야 한다.

/**
 * @param {number[]} arr
 * @return {number}
 */
 var numFactoredBinaryTrees = function(arr) {
  const MOD = 1e9 + 7;
  arr.sort((a, b) => a - b);
  
  const map = new Map();
  
  let total = 0;
  
  for (let i = 0; i < arr.length; i++) {
      const currNum = arr[i];

      let count = 1;

      for (let j = 0; j < i; j++) {
          const prevNum = arr[j];

          if (currNum % prevNum === 0) {
              const otherNum = currNum / prevNum;

              if (map.has(otherNum)) {
                  count = (count + (map.get(otherNum) * map.get(prevNum))) % MOD;
              }
          }
      }
      map.set(currNum, count);
      total = (total + count) % MOD;
  }
  
  return total % MOD;
};