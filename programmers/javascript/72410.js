function solution(new_id) {
  var answer = '';
  //1단계 (대문자 -> 소문자) 
  new_id = new_id.toLowerCase();
  
  //2단계 (알파벳 소문자, 숫자, -, _, . 제외 모든 문자 삭제)
  let regExp =  /[^\w-_.]/g;
  new_id = new_id.replace(regExp, "");
  
  //3단계 (중복된 . 삭제)
  regExp = /\.{2,}/g;
  new_id = new_id.replace(regExp, ".");
  
  //4단계 (.가 문장 처음이나 끝에 위치한다면 제거)
  regExp = /^\.|\.$/g;
  new_id = new_id.replace(regExp, "");
  
  //5단계 (문자열이 빈 문자열이라면, 문자열 에 a를 대입)
  regExp = /^$/g;
  new_id = new_id.replace(regExp, "a");
  
  //6단계 (문자열의 길이가 16자 이상이라면, 첫 15개 문자를 제외한 나머지 문자 삭제, 이때 마지막문자가 .이면 안됨)
  regExp = /\.$/g;
  new_id = new_id.slice(0,15).replace(regExp, "")
;    
  //7단계 (문자열의 길이가 2자 이하라면 마지막 문자를 문자열의 길이가 3일때까지 반복)
  let length = new_id.length;
  length > 2 ? new_id : new_id = (new_id + new_id[length-1].repeat(3-length));
  
  answer = new_id;
  
  return answer;
}