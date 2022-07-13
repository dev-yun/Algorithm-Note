// 택배상자의 크기는 모두 같고, 컨테이너 벨트를 통해 영재에게 순서대로 전달
// 하지만 순서대로 트럭에 싣게 되면 배달 순서와 달라 차질이 생김
// (0 ,1, 2, 3, 4)로 오지만 트럭엔 (3,2,0,1,4)로 실려야 하는 경우

// 때문에 순서가 다르면 그 상자를 잠시 다른 컨테이너 벨트에 보관(이 컨테이너 벨트는 스택 구조)
// 박스를 실을 수 있는 최대 수를 구하라
// sub에 push하고 pop하여 정답 도출

// 기존 컨베이너와 서브 컨베이너를 둘 다 비교해야한다.

function solution(order) {
  var answer = 0;
  const subContainer = [];
  let subIndex = 1;

  for (let i = 0; i < order.length; i++) {
    const box = order[i];
    if (box > subIndex) {
      while (box !== subIndex) {
        subContainer.push(subIndex);
        subIndex++;
      }
    }

    if (box === subIndex) {
      answer++;
      subIndex++;
      continue;
    } else if (box === subContainer.pop()) {
      answer++;
      continue;
    } else break;
  }

  return answer;
}
