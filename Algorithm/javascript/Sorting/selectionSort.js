// 첫번째 배열의 요소부터 비교를 시작하여 전체 배열의 요소의 최솟값을
// 첫번째 배열의 요소와 스왑하면서 진행한다.
// 그 다음 두번째 요소는 두번째 요소부터 끝 요소 중 최소값으로 스왑하고
// 이렇게 모은 배열의 요소를 정렬하는 방식이다.

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const selectionSort = (arr) => {
  let min = Infinity;
  // 첫번째 요소부터 기준으로 잡기
  for (let i = 0; i < arr.length - 1; i++) {
    min = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        swap(arr, i, j);
      }
    }
  }
  return arr;
};
