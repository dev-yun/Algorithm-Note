// a개의 빈병을 가져다 주면 b개의 빈병을 받을때, n개의 빈병이 있을 경우
// 받을 수 있는 콜라의 수는?

function solution(a, b, n) {
  var answer = 0;
  let emptyCola = n;

  while (emptyCola >= a) {
    const cola = parseInt(emptyCola / a) * b;

    emptyCola = emptyCola - (cola / b) * a;
    answer += cola;
    emptyCola = emptyCola + cola;
  }

  return answer;
}
