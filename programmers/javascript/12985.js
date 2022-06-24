// A,B가 만날 라운드를 찾는 문제
// N을 2로 나눠가며 진행
// 12 => 1 34 = > 2 56 => 3 즉 A,B의 /2가 같을때가 정답

function solution(n, a, b) {
  var answer = 0;

  while (true) {
    if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
      answer++;
      break;
    }
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
