function solution(absolutes, signs) {
  var answer = 0;
  absolutes.forEach((num, idx) => {
      if (signs[idx] === true){
          answer += num
      }else{
          answer -= num
      }
  })
  
  return answer;
}