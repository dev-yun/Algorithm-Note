/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const leftBasket = ['(', '[', '{'];
  const rightBasket = [')', ']', '}'];
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // stack이 비었는데 오른쪽 괄호가 나오면 false
    if (stack.length === 0 && rightBasket.includes(s[i])) return false;

    // 왼쪽 괄호가 열리면 stack에 넣고(FILO) 오른쪽 괄호가 나오면 stack과 비교
    // 왼쪽 괄호가 나오면 stack에 추가
    if (leftBasket.includes(s[i])) stack.push(s[i]);
    // 오른쪽 괄호가 나오면 stack을 빼고 index번호 비교
    else {
      if (leftBasket.indexOf(stack.pop()) === rightBasket.indexOf(s[i])) {
        continue;
      } else return false;
    }
  }

  return stack.length === 0 ? true : false;
};
