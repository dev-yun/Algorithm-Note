function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= s.length / 2; i++){
      
      let prev = s.slice(0, i);
      let compressedStr = "";
      let count = 1;
      
      for( let j = i; j <= s.length; j += i){
          
          let next = s.slice(j, j+i);
          
          if (prev === next) 
              count += 1; 
          else{
              compressedStr += (count > 1 ? count : "") + s.slice(j-i, j)
              count = 1;
              prev = next;
          }
      }
      
      compressedStr += (count > 1 ? count : "") + prev
      answer = Math.min(answer, compressedStr.length);
      
  }
  
  return answer;
}
