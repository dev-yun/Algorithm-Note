// 첫번째 배열의 요소부터 비교를 시작하여 전체 배열의 요소의 최솟값을
// 첫번째 배열의 요소와 스왑하면서 진행한다.
// 그 다음 두번째 요소는 두번째 요소부터 끝 요소 중 최소값으로 스왑하고
// 이렇게 모은 배열의 요소를 정렬하는 방식이다.

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const selectionSort = (arr) => {
  // 첫번째 요소부터 기준으로 잡기
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
};

// [0,1,2,3,4,7,6,5] 같이 거의 정렬된 정렬에서
// 자기가 최소값일때는 이를 굳이 스왑할 필요가 없다.
// 이를 처리하면 코드의 효율을 높힐 수 있다.

const selectionSortOptimize = (arr) => {
  // 첫번째 요소부터 기준으로 잡기
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) swap(arr, i, minIndex);
  }
  return arr;
};
