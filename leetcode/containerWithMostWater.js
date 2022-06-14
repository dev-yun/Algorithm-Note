var maxArea = function(height) {
  let startIdx = 0;
  let endIdx = height.length-1;
  let containWater = 0;
  let maxWater = Math.min(height[startIdx], height[endIdx]) * (endIdx - startIdx);

  while(startIdx < endIdx){
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

// 코드 리팩토링

var maxArea = function(height) {
  let startIdx = 0;
  let endIdx = height.length-1;
  let containWater = 0;
  let maxWater = 0;

  while(startIdx < endIdx){
    containWater = Math.min(height[startIdx], height[endIdx]) * (endIdx - startIdx);
    
    maxWater = Math.max(containWater, maxWater)
    
    height[startIdx] <= height[endIdx] ? startIdx++ : endIdx--;
  }

  return maxWater  
};


// 처음에는 단순히 2중 for문을 사용하여 풀려고 했지만 시간복잡도로 틀렸다.
// 

// for(let i = 0; i < height.length; i++){
//   for(let j = i+1; j < height.length; j++){
//     containWater = Math.min(height[i], height[j]) * (j - i);
//     maxWater = Math.max(containWater, maxWater)
//   }
// }