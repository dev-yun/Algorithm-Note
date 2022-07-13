// 두 정수 x, y에서 공통으로 나타나는 정수 (135, 521의 공통 : [1, 5])
// 짝꿍이 존재하지 않으면 -1, 0으로만 구성됐다면 0
// (만약 짝꿍이 3, 0 ,3 이라면 짝꿍으로 만들 수 있는 수 중 가장 큰 수 인 330 반환)

function solution(X, Y) {
  var answer = '';
  let xIndex = 0;
  let yIndex = 0;
  const xArr = X.toString()
    .split('')
    .sort((a, b) => b - a);
  const yArr = Y.toString()
    .split('')
    .sort((a, b) => b - a);

  while (xIndex < xArr.length && yIndex !== yArr.length) {
    if (xArr[xIndex] > yArr[yIndex]) xIndex++;
    else if (xArr[xIndex] < yArr[yIndex]) yIndex++;
    else {
      answer += xArr[xIndex];
      xIndex++;
      yIndex++;
    }
  }

  if (!answer) return '-1';

  return Number(answer) === 0 ? '0' : answer;
}
