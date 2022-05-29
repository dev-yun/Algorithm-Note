function solution(n) {
  const snail = Array.from(Array(n), (_, index) => Array(index + 1));
  let increase = 0;
  let x = -1;
  let y = 0;
  let snailHeight = n;
    
  while (snailHeight > 0) {
    for (let i = 0; i < snailHeight; i++) snail[++x][y] = ++increase;
    for (let i = 0; i < snailHeight - 1; i++) snail[x][++y] = ++increase;
    for (let i = 0; i < snailHeight - 2; i++) snail[--x][--y] = ++increase;
    snailHeight -= 3;
  }
  return snail.flatMap((num) => num);
}