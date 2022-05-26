function solution(sizes) {
  let width = [];
  let height = [];
  
  sizes.forEach(e => {
    if(e[0] > e[1]){
      width.push(e[0])
      height.push(e[1])
    }else{
      width.push(e[1])
      height.push(e[0])
    }
  })

  width.sort((a, b) => b-a)
  height.sort((a, b) => b-a)
  
  return width[0] * height[0];
}