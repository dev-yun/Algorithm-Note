// 목표 : 라이언이 가장 큰 점수 차이로 우승할 때 맞춘 과녁의 배열
        // 만약 무조건 지거나 비기는 경우는 -1 return;
        // 이길 수 있는 경우가 여러가지라면 가장 낮은 점수를 더 많이 맞힌 경우를 return (2발 3점보다 1발 1점, 1발 2점이 우선)

// 같은 갯수를 맞추면 어피치가 그 점수를 가져감
// 둘다 맞추지 못하면 아무도 그 점수를 가져가지 못함

// max를 설정해서 계속해서 max값을 업데이트하고 max가 같을때 원소의 갯수를 비교하며 진행

let maxRyanResult = []

function solution(n, info) {
    var answer = [];
    let ryanInfo = new Array(info.length).fill(0);
    makeRyanInfo(n, ryanInfo, info, 0)
    answer = maxRyanResult.map(e => e[0])
    answer.sort((a,b) => sortLowScore(a,b));
    return answer.length === 0 ? [-1] : answer[0];
}

// 화살 배열(info) 구하기
const makeRyanInfo = (n, ryanInfo, apeachInfo, startElement) => {
    if(n === 0){
        const [ryanScore, apeachScore] = sumScore(ryanInfo, apeachInfo)
        let scoreGap = ryanApeachScoreGap(ryanScore, apeachScore);
        if(scoreGap > 0){
            if(maxRyanResult.length === 0) maxRyanResult.push([ryanInfo, scoreGap])
            else{
                if(maxRyanResult[0][1] < scoreGap){
                    maxRyanResult = [[ryanInfo, scoreGap]]
                }else if(maxRyanResult[0][1] === scoreGap){
                    maxRyanResult.push([ryanInfo, scoreGap])
                }
            }   
        }
        return;
    }
    
    for(let i = startElement; i<ryanInfo.length; i++){
        const newRyanInfo = [...ryanInfo];
        newRyanInfo[i] += 1;
        makeRyanInfo(n-1, newRyanInfo, apeachInfo, i)
    }
    return;

}

// 라이언과 어피치의 배열을 받아와서 score을 구하고 각각의 score을 반환
const sumScore = (ryan, apeach) => {
  let ryanScore = 0;
  let apeachScore = 0;

  for (let i = 0; i < ryan.length; i++){
    if(ryan[i] > apeach[i]){
      ryanScore += (10-i);
    }else if(apeach[i] >= ryan[i] && apeach[i] !== 0){
      apeachScore += (10-i)
    }
  }
  
  return [ryanScore, apeachScore];
}

// 라이언 score와 어피치 score을 비교하여 차이를 반환
const ryanApeachScoreGap = (ryanScore, apeachScore) => {
  return ryanScore - apeachScore;
}

// 배열의 낮은 점수가 많을순으로 정렬
const sortLowScore = (a, b) => {
    for(let i = a.length-1; i >= 0; i--){
        if(a[i] === b[i]) continue;
        return b[i] - a[i]
    }
}