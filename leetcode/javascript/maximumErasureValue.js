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
