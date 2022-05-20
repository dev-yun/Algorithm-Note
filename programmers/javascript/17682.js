function solution(dartResult) {
  let ls = [];
  let pow = 1
  let idx = 0;
  let dartResultArray = dartResult.split((""))
  for(let i of dartResult){
          if(i !== "S" && i !== "D" && i !== "T" && i !== "#" && i !== "*"){
              if(Number.isInteger(parseInt(dartResultArray[idx-1]))){
                  let num = String(dartResultArray[idx-1]) + String(i)
                  ls.pop()
                  ls.push(parseInt(num))
              }else{
                  ls.push(parseInt(i))                    
              }
          }else if(i === "S" || i === "D" || i === "T"){
              if(i === "S"){
                  pow = 1
              }else if(i === "D"){
                  pow = 2
              }else if(i === "T"){
                  pow = 3
              }
              let score = Math.pow(ls.pop(), pow);
              ls.push(score)
          }else{
              if(i==="#"){
                  let minusScore = - ls.pop();
                  ls.push(minusScore)
              }else{
                  let doubleScore = ls.pop()*2;
                  if(ls.length !== 0){
                      let prevScroe = ls.pop()
                      let prevDoubleScore = prevScroe*2;
                      ls.push(prevDoubleScore)
                  }
                  ls.push(doubleScore)
              }
          }
      idx ++
  }
      
  let scoreSum = ls.reduce((sum, a)=> sum += a)
  return scoreSum
  
}