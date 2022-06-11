function solution(numbers, target) {
  let answer = 0;

  const dfs = (level, result) => {
    if (level === numbers.length) {
      if (result === target) answer += 1;
      return;
    }

    dfs(level + 1, result + numbers[level]);
    dfs(level + 1, result - numbers[level]);
  };

  dfs(0, 0);

  return answer;
}
