function solution(n, t, m, p) {
    var answer = '';
    let toStringN = ""
	let num = 0;
    
  while(toStringN.length < m*t){
        
      toStringN += num.toString(n).toUpperCase()
        
      num++;
  }
  //for(let i = 0; i < t*m; i++){
  //    toStringN += i.toString(n).toUpperCase()
  //}

	const slicedStr = toStringN.slice(0, m*t)
    for(let i = 0; i < slicedStr.length; i++){
        let pIdx = i % m;
        if(p === pIdx+1) answer += slicedStr[i];
    }
    
    return answer;
}​