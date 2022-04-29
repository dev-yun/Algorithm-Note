function solution(n) {
  var answer = '';
  while(n>0){
      let rest = n % 3;
      if(rest === 0){
          answer='4' + answer;
          n = parseInt(n/3)-1;
      }else if(rest === 1){
          answer='1' + answer;
          n = parseInt(n/3);
      }else{
          answer='2' + answer;
          n = parseInt(n/3);
      }
  }
  
  return answer;
}