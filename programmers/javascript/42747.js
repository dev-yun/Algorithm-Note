function solution(citations) {
  var answer = 0;
  let resultPaperArr = []

  citations.forEach((e) => {
    let citedPaperCnt = 0;
      
    for(let i = 0; i < citations.length; i++){
      if(e <= citations[i]){
        citedPaperCnt++
      }
    }
      
    if(citedPaperCnt <= e){
      resultPaperArr.push(citedPaperCnt);
    }
  })
  
  answer = resultPaperArr.length > 0 ? Math.max(...resultPaperArr) : 0;
  
  return answer;
}