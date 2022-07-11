// 정수 배열 candidates가 주어지고 target 값이 주어질때
// candidates의 값을 통해 target을 만들 수 있는 모든 경우를 배열에 담아 return 하여라
// 조건 : candidates의 요소는 중복으로 사용할 수 있다.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const dp = Array.from({ length: target + 1 }, () => []);

  // 시작을 위해 dp[0]을 초기화
  dp[0] = [[]];

  candidates.forEach((candidate) => {
    for (let i = candidate; i <= target; i++) {
      dp[i - candidate].forEach((combination) => {
        dp[i].push(combination.concat([candidate]));
      });
    }
  });

  return dp[target];
};

// 백 트래킹 방식

// var combinationSum = function(candidates, target) {
//     const results = [];
//     const buffer = [];

//     const run = (start, sum) => {
//         if (sum === target) {
//             results.push([...buffer]);
//         } else {
//             for (let i = start; i < candidates.length; i++) {
//                 const newSum = sum + candidates[i];

//                 if (newSum <= target) {
//                     buffer.push(candidates[i]);

//                     run(i, newSum);

//                     buffer.pop();
//                 }
//             }
//         }
//     };

//     run(0, 0);

//     return results;
// };
