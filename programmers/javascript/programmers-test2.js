// XYZ 마트는 일정 금액을 지불하면 10일간 회원 자격 부여
// 회원을 대상으로 매일 한가지 제품을 할인, 할인 제품은 하루에 1개만 구매 가능
// 정현이는 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰 회원가입
// 돼지고기 3개, 바나나 2개를 원할 경우 할인 범위에 돼지고기 3번, 바나나 2번이 포함되어야 함

// sliding window 방식으로 discount의 모든 범위를 탐색하고 O(N), 가능한 경우 cnt를 세자.
function solution(want, number, discount) {
  var answer = 0;
  let prev = 0;
  let next = 0;
  const shoppingObj = {};

  want.forEach((e, idx) => (shoppingObj[e] = number[idx]));

  while (next - prev < 10) {
    const item = discount[next];
    if (!Object.keys(shoppingObj).includes(item)) {
      next++;
    } else {
      shoppingObj[item] -= 1;
      next++;
    }
  }

  if (allItemSale(shoppingObj)) answer += 1;

  while (next < discount.length) {
    let addItem = discount[next];
    let delItem = discount[prev];

    if (!Object.keys(shoppingObj).includes(addItem)) {
      next++;
    } else {
      shoppingObj[addItem] -= 1;
      next++;
    }

    if (!Object.keys(shoppingObj).includes(delItem)) {
      prev++;
    } else {
      shoppingObj[delItem] += 1;
      prev++;
    }

    if (allItemSale(shoppingObj)) answer += 1;
  }

  return answer;
}

const allItemSale = (obj) => {
  let result = Object.values(obj).filter((e) => e !== 0);
  return result.length === 0 ? true : false;
};
