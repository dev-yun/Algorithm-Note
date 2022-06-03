function solution(n) {
  const waterMelon = "수박"
  if(n % 2 === 0){
      return waterMelon.repeat(n/2);
  }else{
      return waterMelon.repeat(Math.floor(n/2)) + waterMelon[0]
  }
}