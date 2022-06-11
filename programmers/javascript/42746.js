// 순열을 통해 모든 경우의 수를 구하는 문제로 생각했는데
// 주어진 배열을 "문자열"로 바꿔서 오름차순으로 정렬하면 된다.

function solution(numbers) {
  var answer = '';
  answer = numbers.sort(strSort);

  return answer[0] === 0 ? '0' : answer.join('');
}

const strSort = (a, b) => {
  const compareA = parseInt(a.toString() + b.toString());
  const compareB = parseInt(b.toString() + a.toString());
  return compareB - compareA;
};
