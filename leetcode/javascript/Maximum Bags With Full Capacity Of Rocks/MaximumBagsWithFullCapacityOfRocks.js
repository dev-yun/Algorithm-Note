// 돌을 담을 수 있는 용량 : capacity
// 현재 담겨있는 돌 : rocks
// 추가로 담을 수 있는 돌의 개수 : additionalRocks
// 현재 담겨있는 돌에서 돌을 더 추가해서 capacity를 모두 채우고, 이때 모두 채워진 capacity의 개수를 return 하여라.

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
 var maximumBags = function(capacity, rocks, additionalRocks) {
  let output = 0;
  let needRocks = capacity.map((rock, idx) => {
      return rock - rocks[idx];
  });
  
  needRocks.sort((a, b) => a - b);
  
  needRocks.forEach(rock => {
      if(rock === 0) output++;
      else{
          additionalRocks -= rock;
          if(additionalRocks >= 0) output++;
          else return false;
      }
  })
  
  return output;
};