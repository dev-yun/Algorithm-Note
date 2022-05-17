// count the unique values in the array
// ㅎㅏㄴㄱㅡㄹㅇㅣ ㅇㅏㄴㅆㅓㅈㅣㅁ

// 1. just my answer(not use pointer)
// 1) can use Set to remove same values
// 2) can use Object and count Keys
const countUniqueValues = (arr) => {
  let answer = 0;

  // answer 1
  setArr = new Set([...arr]);
  answer = [...setArr].length;

  // answer 2
  let arrToObj = {};
  arr.forEach((e) => {
    arrToObj[e] = (arrToObj[e] || 0) + 1;
  });

  answer = Object.keys(arrToObj).length;

  return answer;
};

// 2. using 2 Pointer that compare 2 values in array
// first Pointer !== second Pointer
// moving second Pointer to next index
const countUniqueValuesUsingPointer = (arr) => {
  let i = 0;
  let answer = [];
  for (let j = 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      answer.push(arr[i]);
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }

  return answer;
};
