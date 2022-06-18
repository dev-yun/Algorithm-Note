function solution(n) {
  var answer = 0;
  let next = n+1;
  
  while(next <= 1e6){
    const binaryN = n.toString(2);
    let nextBinary = next.toString(2);

    if(countOne(binaryN) === countOne(nextBinary)){
      answer = next;
      break;
    }

    next++;
  }
  
  return answer;
}

const countOne = (binary) => {
let cnt = 0;

for(let i = 0; i < binary.length; i++){
  if(binary[i] === '1') cnt++;
}

return cnt;
}