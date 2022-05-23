// indexOf 내장함수를 반복문을 이용하여 구현

function linearSearch(arr, element){
  // add whatever parameters you deem necessary - good luck!
  for(let i = 0; i < arr.length; i++){
      if(arr[i] === element) return i;
  }
  
  return -1;
}