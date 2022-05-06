function solution(p) {
  var answer = '';
  answer = strRecursive(p);
  return answer;
}

const strRecursive = (p) => {
  if (p.length === 0) return p;

  let left = 0;
  let right = 0;
  let correctBracket = true;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') left++;
    else if (p[i] === ')') right++;

    if (left < right) correctBracket = false;

    if (left === right) {
      const [u, v] = [p.slice(0, i + 1), p.slice(i + 1)];
      if (correctBracket) {
        return u + strRecursive(v);
      } else {
        let emptyStr = '(' + strRecursive(v) + ')';
        const reversedStr = u
          .slice(1, u.length - 1)
          .split('')
          .map((e) => (e === '(' ? ')' : '('))
          .join('');
        return emptyStr + reversedStr;
      }
    }
  }
};
