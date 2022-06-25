function solution(arr1, arr2) {
  // M행 N열 * N행 K열 => M행 K열
  var answer = Array.from(
    { length: arr1.length },
    () => new Array(arr2[0].length)
  );
  const arr1ColAndArr2RowLen = arr1[0].length;
  const arr2ColLen = arr2[0].length;

  arr1.forEach((_, row1) => {
    for (let col2 = 0; col2 < arr2ColLen; col2++) {
      let matrixMul = 0;
      for (
        let arr1ColArr2Raw = 0;
        arr1ColArr2Raw < arr1ColAndArr2RowLen;
        arr1ColArr2Raw++
      ) {
        //console.log(row1,col1,",",col1,col2, arr1[row1][col1], arr2[col1][col2])
        matrixMul += arr1[row1][arr1ColArr2Raw] * arr2[arr1ColArr2Raw][col2];
      }
      answer[row1][col2] = matrixMul;
    }
  });

  return answer;
}
