// 인접한 두 수를 스왑하여 정렬하는 방법으로
// 모든 배열을 한번씩 스왑할때마다 가장 큰 수가 마지막에 위치하게 된다.
// 이를 모든 배열의 요소가 정렬될때까지 반복하는 방법으로 스왑이 핵심

// ES5에서의 swap은 temp를 만들어 한다.
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2016 이후에는 동적할당 방법으로 스왑을 할 수 있음
const swap2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  //for문으로 전체를 순환하며
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

// 최적화 아이디어 : 정렬하는중 swap되는 부분이 없으면 정렬이 끝난것으로 간주하고 코드를 중단한다.
// 위에서 정의한 버블 정렬은 배열이 정렬되었어도 for문을 끝까지 도는 문제점이 있음

const bubbleSortOptimize = (arr) => {
  let isSwap;
  for (let i = 0; i < arr.length; i++) {
    isSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwap = false;
      }
    }
    if (isSwap) break;
  }
  return arr;
};
