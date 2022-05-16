// 두개의 arr이 주어졌을때 arr2가 arr1 원소의 제곱으로 이루어졌는지 확인하는 함수 작성

// 중첩배열을 사용하여 풀이 (비효율적 O(n^2))
const same = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;
  
  arr1.forEach(e => {
    let findIndex = arr2.indexOf(Math.pow(e,2)) 
    if(findIndex === -1) return false;
    arr2.splice(findIndex, 1);
  })
  return true
}


// 빈도수를 세서 풀이 (효율적 O(n))
const sameFrequency = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let key of arr1){
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1; // frequencyCounter1[key]가 존재하면 거기에 +1, 존재하지 않으면 +1
  }
  for(let key of arr2){
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1; // frequencyCounter2[key]가 존재하면 거기에 +1, 존재하지 않으면 +1
  }

  for (let key in frequencyCounter1){
    if(!(key**2 in frequencyCounter2)){
      return false;
    }
    if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}