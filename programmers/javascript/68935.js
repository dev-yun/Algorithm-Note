function solution(n) {
  answer = 0;
  let ternary = n.toString(3);
  let reverse = ternary.split("").reverse().join("")

  answer = parseInt(reverse, 3);
  return answer;
}