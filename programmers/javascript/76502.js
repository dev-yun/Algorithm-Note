function solution(s) {
  let count = 0;
  for(let i = 0; i < s.length; i++){
      s = s.slice(1) + s[0];
      if(correctPattern(s)) count++;  
  }
  return count;
}

const correctPattern = (s) => {
  let leftBracket = ['{','[','('];
  let rightBracket = ['}',']',')'];
  let stack = [];

  if (rightBracket.includes(s[0])) return;

  for(let i = 0; i < s.length; i++){
    stack.push(s[i]);
  }
  for(let i = 0; i < stack.length - 1; i++){
    if(leftBracket.includes(stack[i]) && leftBracket.indexOf(stack[i]) === rightBracket.indexOf(stack[i+1])){
      stack.splice(i,2);
      i = -1;
    }
  }
  return stack.length === 0 ? true : false;
}