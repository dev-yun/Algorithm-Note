function solution(n, wires) {
  let answer = n;
  let wireObj = {};

  wires.forEach((wire) => {
    const [node1, node2] = wire;
    if (!wireObj[node1]) wireObj[node1] = [];
    if (!wireObj[node2]) wireObj[node2] = [];
    wireObj[node1].push(node2);
    wireObj[node2].push(node1);
  });

  const searchTree = (root, exception) => {
    let count = 0;
    const queue = [root];
    const visited = [];
    visited[root] = true;
    while (queue.length) {
      const cur = queue.pop();
      wireObj[cur].map((next) => {
        if (next !== exception && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });
      count++;
    }
    return count;
  };

  wires.map((wire) => {
    const [node1, node2] = wire;
    const dif = Math.abs(searchTree(node1, node2) - searchTree(node2, node1));
    answer = answer > dif ? dif : answer;
  });

  return answer;
}
