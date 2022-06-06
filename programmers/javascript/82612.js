function solution(price, money, count) {
  var answer = -1;
  const totalPrice = getTotalPrice(price, count);

  answer = totalPrice - money;
  return answer > 0 ? answer : 0;
}

const getTotalPrice = (price, count) => {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += i * price;
  }
  return result;
};
