// single number를 제외한 나머지 값은 3번씩 나오고, single number만 한개가 존재한다.
// 이때 single number을 찾아라.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  const uniqueNums = [...new Set(nums)];
  const sumNums = nums.reduce((acc, cur) => acc += cur);
  const sumUniqueNums = uniqueNums.reduce((acc, cur) => acc += cur);
  
  const output = ((sumUniqueNums * 3) - sumNums) / 2;
  
  return output
};