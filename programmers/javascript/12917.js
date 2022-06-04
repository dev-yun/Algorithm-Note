function solution(s) {
  var answer = '';
  const sArr = s.split('');
  const Asciiarr = sArr.map((e) => e.charCodeAt());

  Asciiarr.sort((a, b) => b - a);

  answer = Asciiarr.map((e) => String.fromCharCode(e));

  return answer.join('');
}
