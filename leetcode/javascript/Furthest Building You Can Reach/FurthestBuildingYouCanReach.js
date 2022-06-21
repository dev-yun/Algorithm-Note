// 빌딩들의 높이 heights array가 주어지고 bricks와 ladders가 주어질때
// 현재 빌딩의 높이가 다음 빌딩의 높이보다 크거나 같을때 ladders와 bricks는 필요하지 않다.
// 하지만 현재 빌딩의 높이가 다음 빌딩보다 작을때 나는 ladder을 사용하거나 (h[i+1] - h[i]) bricks을 사용할 수 있다.
// ladder : 다음 빌딩으로 갈수있는 밧줄
// bricks : 다음 빌딩으로 갈수있게 바닥에 쌓는 벽돌? 1개당 높이 1.

// 주의점 : ladder을 사용할 것인지. bricks를 사용할 것인지.
// 1. bricks를 다 사용해도 넘을 수 없는 경우
// 2. bricks를 사용하는 것보다 ladders를 사용하는 것이 효율적인 경우.(뒤의 높이들을 알아야함)

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  let buildingLen = heights.length;
  let left = 0,
    right = buildingLen - 1;

  let needBricks = new Array(buildingLen).fill(0);

  for (let idx = 1; idx < buildingLen; idx++) {
    needBricks[idx] = Math.max(0, heights[idx] - heights[idx - 1]);
  }

  const canReach = (buildingIdx) => {
    if (ladders > buildingIdx) return true;

    const bricksArr = needBricks
      .slice(0, buildingIdx + 1)
      .sort((a, b) => a - b);

    let bricksCnt = bricks;
    let idx = 0;
    while (bricksCnt >= 0 && idx < bricksArr.length - ladders) {
      bricksCnt -= bricksArr[idx];
      idx += 1;
    }
    return bricksCnt >= 0;
  };

  while (left < right) {
    const mid = Math.ceil((left + right) / 2);
    if (canReach(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
