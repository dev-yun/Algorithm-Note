function solution(arr1, arr2) {
  // M행 N열 * N행 K열 => M행 K열
  var answer = Array.from(
    { length: arr1.length },
    () => new Array(arr2[0].length)
  );
  const arr1RowLen = arr1.length;
  const arr1ColLen = arr1[0].length;
  const arr2RowLen = arr2.length;
  const arr2ColLen = arr2[0].length;

  arr1.forEach((arr, row1) => {
    for (let col2 = 0; col2 < arr2ColLen; col2++) {
      let matrixMul = 0;
      for (let col1 = 0; col1 < arr1ColLen; col1++) {
        //console.log(row1,col1,",",col1,col2, arr1[row1][col1], arr2[col1][col2])
        matrixMul += arr1[row1][col1] * arr2[col1][col2];
      }
      answer[row1][col2] = matrixMul;
    }
  });

  return answer;
}
