// 왼쪽을 정렬된 배열로 취급하며 다음 요소를 이전 배열들과 비교하여
// 자신의 위치에 들어가게 하는 배열들과
// 정렬됐다고 취급하는 왼쪽 배열의 마지막 요소부터 비교한다.
// 왼쪽 배열의 마지막요소부터 비교하는 이유는 만약 마지막 요소보다 클경우 그냥 그자리에 있으면 되기 때문에.

const insertionSort = (arr) => {
  // 두번째 요소부터 비교 시작
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let replaceIndex = -1;
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      // j+1 = i 이고 currentValue에 저장되었기 때문에 arr[j+1]을 재할당해도 문제없다.
      arr[j + 1] = arr[j];
      replaceIndex = j;
    }
    if (replaceIndex !== -1) arr[replaceIndex] = currentValue;
  }
  return arr;
};
