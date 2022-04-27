function solution(N, stages) {
  const answer = [];
  const stageClear = new Array(N+1).fill(0);
  let failRate = [];
  let challenger = stages.length;
  
  // 스테이지 클리어한 인원 배열 생성
  stages.forEach((e) => {
      for(let i = 1; i <=N+1; i++){
          if(e===i){
              stageClear[i-1] += 1
          }
      }
  })
  
  // 실패율과 그때의 index를 생성
  stageClear.forEach((e, idx) => {
      if(idx === 0){
          failRate.push([e / challenger, idx+1]);
      }else{
          challenger -= stageClear[idx-1]
          failRate.push([e / challenger, idx+1])
      }
  })
  
  failRate = failRate.slice(0,-1);
  
  failRate.sort((a, b) => b[0] - a[0]);
  failRate.forEach((e) => answer.push(e[1]));
  
  return answer;
}