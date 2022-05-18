// 배열과 기준 숫자가 주어진다.
// 주어진 배열의 합이 숫자보다 큰 경우들 중 가장 길이가 작은 경우를 구하여라
// [2,1,4,2,3,4], 7 일때 합이 7이상인 경우는 [2,1,4,2,3,4], [2,1,4,2,3], [2,1,4,2], [2,1,4]...
// 많이 존재하지만 [3,4]일때가 가장 길이가 작은 경우가 되고 정답은 '2'가 된다.

function minSubArrayLen(arr, num){
  let start = 0;
  let end = 0;
  let arrSum = 0;
  
  let minLen = Infinity;
  
  while(start < arr.length){
      // end가 범위내에 있고 배열의 합이 주어진 수보다 작을때 arr[end] 더하고 end++
      if(arrSum < num && end < arr.length){
          arrSum += arr[end];
          end++;
      }
      // 배열의 합이 주어진 수보다 크거나 같을때 arr[start] 빼고 start++
      else if(arrSum >= num){
          minLen = Math.min(minLen, end-start);
          arrSum -= arr[start];
          start++;
      }
      // 배열의 합이 num보다 작은데 end === arr.length일때 start < arr.length이므로 무한루프
      else break;
  }

  return minLen === Infinity ? 0 : minLen;
}

