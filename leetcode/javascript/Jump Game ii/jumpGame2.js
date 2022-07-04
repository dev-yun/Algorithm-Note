// 각 index의 값은 현재 뛸수있는 최장거리이다.
// 가장 적은 점프를 하여 마지막 인덱스로 도달할 수 있는 경우의 수를 구하여라

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  const dp = new Array(nums.length);
  
  dp[0] = 0;
  let jump = 0;
  
  // i는 현재 index + nums[i]는 현재 index에서 뛸 수 있는 거리
  for(let i = 0; i < nums.length - 1; i++){
      if(i + nums[i] > jump){
          // i + nums[i]는 현재 위치에서 갈 수 있는 거리들이고 j에서 한칸씩 증가
          for(let j = jump + 1; j <= i + nums[i]; j++){
              if(j >= nums.length) break;
              dp[j] = dp[i] + 1;
          }
          jump = i + nums[i];
      }
  }
  
  
  return dp[nums.length - 1]
};

