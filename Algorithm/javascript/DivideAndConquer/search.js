// search example

// O(N)
const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

// O(log(N))
const binarySearch = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < value) min = middle - 1;
    else if (arr[middle] > value) max = middle + 1;
    else return middle;
  }

  return -1;
};
