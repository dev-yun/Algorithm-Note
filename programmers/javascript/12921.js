// 효율성 테스트에서 탈락

// function solution(n) {
//   var answer = 0;
//   for(let i = 2; i <= n; i++){
//       if(isPrimeNum(i)) answer++;
//   }
//   return answer;
// }

// const isPrimeNum = (n) => {
//   if(n === 1) return false;
//   for(let i = 2; i < n; i++){
//       if(n % i === 0) return false;
//   }
//   return true;
// }

function solution(n) {
  let arr = Array(n+1).fill(true).fill(false, 0, 2);
  for(let i = 2; i*i <= n; i++){
      if(arr[i]){
          for(let j = i*i; j <= n; j += i){
              arr[j] = false;
          }
      }
  }
  return arr.filter(e => e).length;
}