function solution(progresses, speeds) {
  var answer = [0];
  const endProgress = [];
  let cnt = 1;

  progresses.forEach((e, idx) => {
      for(let i = 1; i <= 100; i++){
          e += speeds[idx];
          if(e >= 100){
              endProgress.push(i);
              return;
          }
      }
  })
  
  let max = endProgress[0];
  
  for(let i = 0, j = 0; i < endProgress.length; i++){
      if(endProgress[i] <= max){
          answer[j] += 1;
      }else{
          max = endProgress[i];
          answer[++j] = 1;
      }
  }

  return answer;
}