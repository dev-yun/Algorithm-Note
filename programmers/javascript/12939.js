function solution(s) {
  var answer = '';

  const arr = s.split(' ').map((e) => {
    return Number(e);
  });

  answer = Math.min(...arr) + ' ' + Math.max(...arr);
  return answer;
}
