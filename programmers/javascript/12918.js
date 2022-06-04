function solution(s) {
  var answer = false;
  if (isStrLength4or6(s) && isOnlyNum(s)) answer = true;

  return answer;
}

const isStrLength4or6 = (str) => {
  if (str.length === 4 || str.length === 6) return true;

  return false;
};

const isOnlyNum = (str) => {
  // 숫자 이외를 전부 찾는 정규식
  let re = /[^\d]/g;

  // 숫자 이외에 매치되는 것이 있다면 false
  if (re.test(str)) return false;

  return true;
};
