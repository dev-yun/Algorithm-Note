// function solution(s) {
//   var answer = '';
//   const sArr = s.split('');
//   const Asciiarr = sArr.map((e) => e.charCodeAt());

//   Asciiarr.sort((a, b) => b - a);

//   answer = Asciiarr.map((e) => String.fromCharCode(e));

//   return answer.join('');
// }

// 문자열 자체를 return -1, 1을 통해 정렬하는 방법도 있다.
// 더 빠름
function solution(s) {
  const sArr = s.split('');

  sArr.sort((a, b) => {
    if (a > b) return -1;
    else return 1;
  });

  return sArr.join('');
}
