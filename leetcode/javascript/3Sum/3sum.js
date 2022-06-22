// 숫자 배열이 주어질때 3개를 뽑아 더했을 경우 0이 되는 경우
// 그 숫자들을 배열로 넣어 출력

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  let output = [];
  
  if(nums.length < 3) return output;
  
  nums.sort((a, b) => a - b);
  
  for(let fixed = 0; fixed < nums.length - 2; fixed++){
      if(nums[fixed] > 0) break;
      if(nums[fixed] === nums[fixed - 1]) continue;
      
      let start = fixed + 1, end = nums.length-1;
      
      while(start < end){
          const sum3Nums = nums[fixed] + nums[start] + nums[end];
          
          if(sum3Nums === 0) {
              output.push([nums[fixed], nums[start], nums[end]])
              while(start < end && nums[start] === nums[start + 1]) start++;
              while(start < end && nums[end] === nums[end-1]) end--;
              start++, end--;
              continue;
          }
          else if(sum3Nums < 0){
              while(start < end && nums[start] === nums[start + 1]) start++;
              start++;
          }else{
              while(start < end && nums[end] === nums[end-1]) end--;
              end--;
          }
      }
  }
  
  
  return output
};