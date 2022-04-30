function solution(nums) {
  let answer = 0;
  let poketmonType = [];
  let canSelect = nums.length/2;

  nums.sort();
  nums.filter((e,idx) => e !== nums[idx+1] && poketmonType.push(e));

  poketmonType.length >= canSelect ? answer = canSelect : answer = poketmonType.length;
  
  return answer;
}