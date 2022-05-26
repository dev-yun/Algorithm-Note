// divide and conquer 방식으로 구현한다.
// 1. 주어진 배열을 더이상 쪼갤 수 없을때까지 (배열의 요소가 1개 또는 0개) 나누고
// 2. 다시 합병한다. (이때 합병하면서 정렬도 같이 한다.)

const conquer = (arr1, arr2) => {
  let returnArr = [];
  let i = 0;
  let j = 0;
  while (returnArr.length < arr1.length + arr2.length) {
    if (arr1[i] <= arr2[j] || arr2[j] === undefined) {
      returnArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || arr1[i] === undefined) {
      returnArr.push(arr2[j]);
      j++;
    }
  }
  return returnArr;
};

const divide = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = parseInt(arr.length / 2);
  let leftArr = divide(arr.slice(0, mid));
  let rightArr = divide(arr.slice(mid));
  return conquer(leftArr, rightArr);
};
