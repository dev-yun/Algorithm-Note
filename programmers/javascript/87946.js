function solution(k, dungeons) {
  var answer = 0;
  const exploredCntArr = [];
  const dungeonPermutations = getPermutations(dungeons, dungeons.length);

  dungeonPermutations.forEach((dungeon) => {
    let exploredCnt = 0;
    let remainedPirodo = k;
    dungeon.forEach((pirodo) => {
      const [hadPirodo, usedPirodo] = pirodo;
      if (remainedPirodo >= hadPirodo) {
        remainedPirodo -= usedPirodo;
        exploredCnt++;
      }
    });
    exploredCntArr.push(exploredCnt);
  });

  answer = Math.max(...exploredCntArr);

  return answer;
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};
