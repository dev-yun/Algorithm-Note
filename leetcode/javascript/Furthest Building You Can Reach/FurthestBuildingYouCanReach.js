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
