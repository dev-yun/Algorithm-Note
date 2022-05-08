function solution(line) {
  let left = 'Q';
  let right = 'P';
  let result = [];

  line.split('').forEach((e) => {
    console.log(
      `right : ${right}, left : ${left}, e : ${e}, result : ${result}`
    );
    // 1. 오른쪽이 가까울 경우
    if (getDistance(left, e) > getDistance(right, e)) {
      result.push(1);
      right = e;
    }
    // 2. 왼쪽이 가까울 경우
    else if (getDistance(left, e) < getDistance(right, e)) {
      result.push(0);
      left = e;
    }
    // 3. 같을 경우
    else {
      // 수평 거리가 오른쪽이 가까울 경우
      if (getHorizontalDistance(left, e) > getHorizontalDistance(right, e)) {
        result.push(1);
        right = e;
      }
      // 왼쪽이 가까울 경우
      else if (
        getHorizontalDistance(left, e) < getHorizontalDistance(right, e)
      ) {
        result.push(0);
        left = e;
      }
      // 같을 경우
      else {
        // 12345QWERT은 왼쪽, 67890YUIOP는 오른쪽이
        if ('67890YUIOP'.includes(e)) {
          result.push(1);
          right = e;
        } else if ('12345QWERT'.includes(e)) {
          result.push(0);
          left = e;
        }
      }
    }
  });
  return result;
}

const getDistance = (a, b) => {
  let keyBoard = {
    1: [0, 1],
    2: [0, 2],
    3: [0, 3],
    4: [0, 4],
    5: [0, 5],
    6: [0, 6],
    7: [0, 7],
    8: [0, 8],
    9: [0, 9],
    0: [0, 10],
    Q: [1, 1],
    W: [1, 2],
    E: [1, 3],
    R: [1, 4],
    T: [1, 5],
    Y: [1, 6],
    U: [1, 7],
    I: [1, 8],
    O: [1, 9],
    P: [1, 10],
  };
  return (
    Math.abs(keyBoard[a][0] - keyBoard[b][0]) +
    Math.abs(keyBoard[a][1] - keyBoard[b][1])
  );
};

const getHorizontalDistance = (a, b) => {
  let keyBoard = {
    1: [0, 1],
    2: [0, 2],
    3: [0, 3],
    4: [0, 4],
    5: [0, 5],
    6: [0, 6],
    7: [0, 7],
    8: [0, 8],
    9: [0, 9],
    0: [0, 10],
    Q: [1, 1],
    W: [1, 2],
    E: [1, 3],
    R: [1, 4],
    T: [1, 5],
    Y: [1, 6],
    U: [1, 7],
    I: [1, 8],
    O: [1, 9],
    P: [1, 10],
  };
  return Math.abs(keyBoard[a][1] - keyBoard[b][1]);
};
