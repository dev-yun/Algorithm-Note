function solution(expression) {
  var answer = [];
  const re = /[-*+]/g;
  const operationArr = expression.match(re);
  const numArr = expression.split(re).map(e => parseInt(e));
  
  let uniqueOper =  new Set(operationArr);
  uniqueOper = Array.from(uniqueOper);
  
  let permutationOper =  getPermutations(uniqueOper, uniqueOper.length)
  permutationOper.forEach(e => {
      answer.push(operationResult([...numArr], [...operationArr], ...e))
  })
  
  return Math.max(...answer);
}

const operationResult = (numArr, operationArr, oper1, oper2, oper3) =>{
let result = 0;
for(let i = 0; i <= operationArr.length; i++){
  if(operationArr[i] === oper1){
    result = eval(numArr[i] +  oper1 + numArr[i+1]);
    numArr.splice(i,2,result);
    operationArr.splice(i,1);
    i = -1;
    result = 0;
    continue;
  }else if(!operationArr.includes(oper1) && operationArr[i] === oper2 && oper2 !== undefined){
    result = eval(numArr[i] +  oper2 + numArr[i+1]);
    numArr.splice(i,2,result);
    operationArr.splice(i,1);
    i = -1;
    result = 0;
    continue;
  }else if(!operationArr.includes(oper2) && operationArr[i] === oper3 && oper3 !== undefined){
    result = eval(numArr[i] +  oper3 + numArr[i+1]);
    numArr.splice(i,2,result);
    operationArr.splice(i,1);
    i = -1;
    result = 0;
    continue;
  }
}
return Math.abs(numArr[0]);
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached); 
  });

  return results;
}