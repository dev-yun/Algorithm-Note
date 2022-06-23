function solution(land) {
  var answer = 0;

  for (let row = 1; row < land.length; row++) {
    for (let col = 0; col < land[0].length; col++) {
      land[row][col] += Math.max(
        ...land[row - 1].slice(0, col),
        ...land[row - 1].slice(col + 1)
      );
    }
  }

  answer = Math.max(...land[land.length - 1]);

  return answer;
}
