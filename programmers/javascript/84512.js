function solution(word) {
  var answer = 0;
  const orderedWord = ['A', 'E', 'I', 'O', 'U'];
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(...[orderedWord[i]]);
    for (let j = 0; j < 5; j++) {
      arr.push(...[orderedWord[i] + orderedWord[j]]);
      for (let k = 0; k < 5; k++) {
        arr.push(...[orderedWord[i] + orderedWord[j] + orderedWord[k]]);
        for (let m = 0; m < 5; m++) {
          arr.push(
            ...[
              orderedWord[i] + orderedWord[j] + orderedWord[k] + orderedWord[m],
            ]
          );
          for (let n = 0; n < 5; n++) {
            arr.push(
              ...[
                orderedWord[i] +
                  orderedWord[j] +
                  orderedWord[k] +
                  orderedWord[m] +
                  orderedWord[n],
              ]
            );
          }
        }
      }
    }
  }

  answer = arr.indexOf(word) + 1;
  return answer;
}
