// 기수 정리.
// 각 진수에 맞는 버킷을 두어(2진수 2버킷, 3진수 3버킷, 10진수 10버킷)
// 1의 자리부터 해당 버킷에 맞는 위치로 이동시킨다. (16의 1의자리는 6이므로 6버킷으로 들어간다.)
// 그렇게 가장 큰수(49238이 가장 크다면 10000의 자리까지 버킷에 넣음 (5번 진행한다는 의미))까지 진행한다.

// step 1. 자리수를 알아내는 메서드
const getDigit = (num, place) => {
  reversedNumArr = num.toString().split('').reverse();
  if (place >= reversedNumArr.length) return 0;
  return parseInt(reversedNumArr[place]);
};

// step 2. 기수정렬 구현
const radixSort = (arr) => {
  let bucket = Array.from(Array(10), () => Array().fill(null));
  // 입력된 배열 중 가장 큰 자리수 추출
  const maxDigitLength = Math.max(...arr).toString().length;
  // maxDigitLength번 getDigit함수 실행
  for (let digit = 0; digit < maxDigitLength; digit++) {
    arr.forEach((e) => {
      bucket[getDigit(e, digit)].push(e);
    });
    arr = bucket.flatMap((num) => num);
    console.log(arr);
    bucket = Array.from(Array(10), () => Array().fill(null));
  }

  return arr;
};
