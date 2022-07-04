// aaaabbbccd 처럼 한 문자가 n개 있으면 다른 문자는 n개가 있으면 안된다는 규칙을 만족할 경우 good이다.
// good이 되기 위해 지워야할 문자의 개수를 구해라.
// 굳이 지울 필요가 없다. 지워야하는 개수만 찾으면 된다.(효율성)

// 좋지 못한 코드

/**
 * @param {string} s
 * @return {number}
 */
 var minDeletions = function(s) {
  let sArr = s.split("").sort();
  let sameWordCnt = 1;
  let cntArr = [];
  let output = 0;
  
  for(let i = 1; i < sArr.length; i++){
      if(sArr[i-1] === sArr[i]) sameWordCnt++;
      else{
          cntArr.push(sameWordCnt);
          sameWordCnt = 1;
      }
  }
  cntArr.push(sameWordCnt)
  
  cntArr.sort((a,b) => b - a)
  
  for(let i = 1; i < cntArr.length; i++){
      if(cntArr[i-1] <= cntArr[i]){
          while(cntArr[i-1] <= cntArr[i] && cntArr[i] !== 0){
              cntArr[i] -= 1;
              output++;
          }
      }
  }
  
  return output;
};

// 좋은 코드

/**
 * @param {string} s
 * @return {number}
 */
 var minDeletions = function(s) {
  let arr = Array(26).fill(0)
  let res = 0
  let base = 'a'.charCodeAt();
  
  for(let i=0;i<s.length; i++){
      let index = s[i].charCodeAt() - base;
      arr[index]++
  }
  
  arr.sort((a,b)=>b-a)
  
  for(let i=1; i<26; i++){
      while(arr[i] && arr[i] >= arr[i-1]){
          arr[i]--
          res++
      }
  }
  
  return res
};