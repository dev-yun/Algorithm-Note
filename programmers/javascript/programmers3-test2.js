// 빵 야채 고기 빵 순서로 포장을 진행 (1 2 3 1)
// 재료가 배열로 주어질때 만들 수 있는 햄버거의 개수를 구하여라

function solution(ingredient) {
  var answer = 0;
  let stack = [];

  ingredient.forEach((e) => {
    stack.push(e);
    if (stack.slice(stack.length - 4).join('') === [1, 2, 3, 1].join('')) {
      answer += 1;
      stack.splice(stack.length - 4);
    }
  });
  return answer;
}
