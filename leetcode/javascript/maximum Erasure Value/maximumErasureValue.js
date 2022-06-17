// 주어진 배열에서 subArr이 최대가 되게 만들고 만들어진 subArr의 합을 구하는 문제

// 시간 복잡도 문제로 탈락
// forEach, reduce, splice => O(n^2)
var maximumUniqueSubarray = function (nums) {
  let answer = 0;
  let subArray = [];
  const sumSubArray = [];

  nums.forEach((e) => {
    if (!subArray.includes(e)) {
      subArray.push(e);
    } else {
      sumSubArray.push(subArray.reduce((acc, cur) => acc + cur));
      subArray.push(e);
      subArray.splice(0, subArray.indexOf(e) + 1);
    }
  });

  sumSubArray.push(subArray.reduce((acc, cur) => acc + cur));
  answer = Math.max(...sumSubArray);
  return answer;
};

// sliding Window를 사용하여 시간복잡도 문제 해결
// Int8Array 타입 배열은 2의 보수 8비트 부호있는 정수의 배열을 나타냅니다.
var maximumUniqueSubarray = function (nums) {
  const doublePrice = new Int8Array(10001);
  let total = 0;
  let best = 0;

  for (let left = 0, right = 0; right < nums.length; right++) {
    doublePrice[nums[right]] += 1;
    total += nums[right];
    while (doublePrice[nums[right]] > 1) {
      doublePrice[nums[left]] -= 1;
      total -= nums[left];
      left++;
    }
    best = Math.max(total, best);
  }

  return best;
};
