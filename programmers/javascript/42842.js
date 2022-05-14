function solution(brown, yellow) {
  var answer = [];

  brownWidthHeight = (brown + 4) / 2;
  yellowWidthHeight = brownWidthHeight - 4;

  for(let i = 1; i <= yellowWidthHeight; i++){
    let yellowCarpet = i * (yellowWidthHeight-i);
    if(yellowCarpet === yellow && i >= (yellowWidthHeight-i)){
      answer = [i, yellowWidthHeight-i];
    }
  }

  answer = answer.map(e => e+2);
  
  return answer;
}