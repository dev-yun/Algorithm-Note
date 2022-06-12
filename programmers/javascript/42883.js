// number의 앞부터 탐색하며 제거할수있는 수가 남았을 경우
// 더 큰수가 나올시 swap한다.
// 제거할 수 있는 수가 더이상 없으면 나머지 수는 그대로 넣는다.

function solution(number, k) {
  var answer = '';
  const resultArr = [];
  let deleteCnt = 0;

  for (let i = 0; i < number.length; i++) {
    while (deleteCnt < k && resultArr[resultArr.length - 1] < number[i]) {
      resultArr.pop();
      deleteCnt++;
    }
    if (resultArr.length < number.length - k) resultArr.push(number[i]);
  }
  answer = resultArr.join('');
  return answer;
}
