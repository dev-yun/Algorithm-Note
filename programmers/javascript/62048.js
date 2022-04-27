function solution(w, h) {
  let answer = 1;
  const gcd = getGCD(w, h);
  answer = w * h - (w+h-gcd);
  return answer
}

function getGCD(w, h) {
  const mod = w % h;
  
  return mod === 0 ? h : getGCD(h,mod);
}