function solution(clothes) {
  let answer = 1;
  const spyClothes  = {}
  
  for(let clothe of clothes){
    spyClothes[clothe[1]] = (spyClothes[clothe[1]] || 0) + 1;
  }

  for(let clotheType in spyClothes){
    answer *= (spyClothes[clotheType] + 1)
  }

  return answer - 1 
}