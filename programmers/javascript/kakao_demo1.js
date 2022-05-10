function solution(v) {
  var answer = [];
  let x = [];
  let y = [];

  v.forEach((e) => {
    x.push(e[0]);
    y.push(e[1]);
  });

  answer.push(findLastCoordinate(x));
  answer.push(findLastCoordinate(y));

  return answer;
}

const findLastCoordinate = (arr) => {
  if (arr[0] === arr[1]) return arr[2];
  else if (arr[0] === arr[2]) return arr[1];
  else return arr[0];
};
