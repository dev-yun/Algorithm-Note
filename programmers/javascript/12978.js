function solution(N, road, K) {
  var answer = 0;
  const graph = {};
  const accTime = new Array(N + 1).fill(Infinity);
  const queue = [];

  road.forEach((info) => {
    const [node1, node2, time] = info;
    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];
    graph[node1].push([node2, time]);
    graph[node2].push([node1, time]);
  });

  // queue는 1부터 시작
  queue.push([1, 0]);
  // 누적 시간 1노드 위치에 0(자기자신은 0시간) 삽입
  accTime[1] = 0;

  while (queue.length) {
    // 1부터 지우며 탐색(bfs)
    let [curNode] = queue.shift();

    graph[curNode].forEach((next) => {
      // 만약 해당 노드의 누적시간보다 이전 노드에서 이번 노드로 이동한 시간의 합이 더 작다면
      // next[0] : 연결된 다음 노드, next[1] : 연결된 다음 노드간의 시간
      if (accTime[next[0]] > accTime[curNode] + next[1]) {
        accTime[next[0]] = accTime[curNode] + next[1];
        queue.push(next);
      }
    });
  }

  answer = accTime.filter((time) => time <= K);
  return answer.length;
}
