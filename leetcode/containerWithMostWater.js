var maxArea = function(height) {
  let startIdx = 0;
  let endIdx = height.length-1;
  let containWater = 0;
  let maxWater = Math.min(height[startIdx], height[endIdx]) * (endIdx - startIdx);

  while(startIdx < endIdx){
    // console.log(startIdx, endIdx, maxWater)
    if(height[startIdx] <= height[endIdx]){
      startIdx++;
      containWater = Math.min(height[startIdx], height[endIdx]) * (endIdx - startIdx);
      maxWater = Math.max(containWater, maxWater)
    }else if(height[endIdx] < height[startIdx]){
      endIdx--;
      containWater = Math.min(height[startIdx], height[endIdx]) * (endIdx - startIdx);
      maxWater = Math.max(containWater, maxWater)
    }
  }

  return maxWater  
};