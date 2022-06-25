// 원소 하나만 바꾸어 오름차순을 만들 수 있는지 구하는 문제
// [4,2,3]일 경우 4를 1로 만들면 오름차순이 될 수 있다.
// 즉, 이전값보다 다음값이 작은 경우가 2번 이상이면 false, 0번or1번이면 true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let decreasingCnt = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    const left = i,
      mid = i + 1,
      right = i + 2;

    if (nums[left] <= nums[mid] && nums[mid] <= nums[right]) continue;
    else {
      // left <= right일때 mid를 작은 쪽으로 넣고 decrease++
      if (nums[left] <= nums[right]) {
        nums[mid] = nums[left];
        decreasingCnt++;
      }
      // left > right일때
      else {
        // left > mid > right
        if (nums[left] > nums[mid] && nums[mid] > nums[right]) return false;
        // left > right >= mid일때 left = mid, decrease++
        else if (nums[mid] <= nums[right]) {
          nums[left] = nums[mid];
          decreasingCnt++;
        }
        // mid >= left > right 일때, right = mid decrease++
        else if (nums[mid] >= nums[left]) {
          nums[right] = nums[mid];
          decreasingCnt++;
        }
      }
    }
  }

  return decreasingCnt > 1 ? false : true;
};
