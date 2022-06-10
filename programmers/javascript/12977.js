function solution(nums) {
  const sumArr = []
  const combinations = getCombinations(nums, 3)
  combinations.forEach(e => sumArr.push(e.reduce((a,b) => a+b)))
  let count = sumArr.length;
  
  sumArr.forEach(e => {
      for(let i = 2; i <= Math.floor(e/2); i++){
          if(e % i === 0){
              count--;
              break;
          }

      }
  })
  
  return count;
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
      
    results.push(...attached);
  });

  return results
}