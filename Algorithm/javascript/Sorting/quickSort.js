// merge 정렬과 유사하게 배열을 더이상 나눌 수 없을때까지 쪼갠다.(재귀)
// 다른점
// 1. 배열을 쪼갤때 피벗 포인트라는 단일요소를 사용한다.
//    피벗 포인트는 보통 비교 배열의 첫번째 요소를 사용하지만 배열을 반으로 나눌 수 있으면 이상적이다.
//    배열을 반으로 나누는 방법은
// 2. 배열은 항상 2등분으로 쪼개지는 것이 아니라 피벗 포인트를 기준으로 나뉜다.

const pivot = (arr, start, end) => {
  let pivotValue = arr[start];
  let pivotPoint = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivotValue >= arr[i]) {
      pivotPoint++;
      [arr[pivotPoint], arr[i]] = [arr[i], arr[pivotPoint]];
    }
  }
  [arr[start], arr[pivotPoint]] = [arr[pivotPoint], arr[start]];
  return pivotPoint;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  // 재귀 호출 조건
  if (start < end) {
    // pivot 함수를 통해 피벗 포인트를 찾는다.
    let pivotPoint = pivot(arr, start, end);

    // 해당 포인트의 앞, 뒤에서 재귀적으로 pivot을 수행한다.
    // left
    quickSort(arr, start, pivotPoint - 1);
    // right
    quickSort(arr, pivotPoint + 1, end);
  }
  return arr;
};
