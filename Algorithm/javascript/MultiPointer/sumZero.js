// 주어진 배열에서 서로 합했을때 0이 되는 원소를 찾으면 반환하는 함수 sumZero 작성
// sumZero(-3,-1,0,1,3) => [-3,3];
// sumZero(-2, -1, 0, 3) => undefined;
// 조건 : 이때 주어진 매개변수 배열은 항상 오름차순으로 정렬되어있다.

// 단순히 앞, 뒤에서부터 탐색하여 더하는 방법 (비효율적 O(n^2))
const sumZero = (arr) => {
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}


// 앞에서 부터 탐색하는 포인터와 뒤에서 부터 탐색하는 포인터를 사용 (효율적 O(n))
const sumZeroUsePointer = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right){
    console.log(left,arr[left],right,arr[right])
    if(arr[left] + arr[right] < 0){
      left++;
    }else if(arr[left] + arr[right] > 0){
      right--;
    }else{
      return [arr[left], arr[right]]
    } 
  }
}