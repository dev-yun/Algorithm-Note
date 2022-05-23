function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let midIndex = parseInt((start + end) / 2);

  while(arr[midIndex] !== element && start <= end){
    if(arr[midIndex] > element) {
      end = midIndex - 1;
    }
    else if (arr[midIndex] < element){
      start = midIndex + 1;
    }
    midIndex = parseInt((start + end) / 2);
  }

  return arr[midIndex] === element ? midIndex : -1;
}
