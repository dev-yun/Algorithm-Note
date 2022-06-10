function solution(array, commands) {
  var answer = [];
  commands.forEach(command => {
      let [start, end, index] = command;
      const sliceArr = getSliceArr(array, start, end);
      getSliceArr(sliceArr);
      sliceArr.sort((a,b) => a-b);
      
      answer.push(selectElement(sliceArr, index))
  })
  return answer;
}

const getSliceArr = (array, start, end) => {
  return array.slice(start-1, end);
}

const selectElement = (array, index) => {
  return array[index-1];
}