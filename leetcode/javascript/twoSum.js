// 주어진 배열 nums에서 두 수를 더해 target 값을 만들 수 있는
// nums elements의 index 번호를 구하는 문제이다.

// target값에서 nums[i]를 뺀 값이 nums에 있는지 탐색하고
// 있으면 answer에 넣어 값을 구한다.

var twoSum = function (nums, target) {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    const findVal = target - nums[i];
    if (nums.indexOf(findVal) !== -1 && nums.indexOf(findVal) !== i) {
      answer = [i, nums.indexOf(findVal)];
      break;
    }
  }

  return answer;
};
