// matchstick이 담긴 배열 matchsticks가 주어지고
// 모든 matchstick을 사용하여 하나의 정사각형을 만드는 문제 (가능하면 true, 안되면 false)
// 조건1. stick은 부술수 없고 연결할 수 있다.
// 조건2. 각각의 stick은 한번만 사용할 수 있다.

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  const perimeter = matchsticks.reduce((acc, cur) => (acc += cur));
  const sideLen = perimeter / 4;
  const sideArr = new Array(4).fill(0);

  matchsticks.sort((a, b) => b - a);

  if (
    !Number.isInteger(sideLen) ||
    matchsticks.length < 4 ||
    matchsticks[0] > sideLen
  )
    return false;

  const dfs = (stickIdx, sideLen) => {
    if (stickIdx === matchsticks.length) return true;
    for (let i = 0; i < 4; i++) {
      if (sideArr[i] + matchsticks[stickIdx] > sideLen) continue;

      sideArr[i] += matchsticks[stickIdx];

      if (dfs(stickIdx + 1, sideLen)) return true;

      sideArr[i] -= matchsticks[stickIdx];
    }

    return false;
  };

  return dfs(0, sideLen);
};
