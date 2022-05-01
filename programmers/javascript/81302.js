function solution(places) {
  var answer = [];
  answer = places.map((place) => {
      return place.some((row, rowIdx) => 
          row.split('').some((mark, colIdx, rowArr) => {
              if(mark === 'X') return false
              const checkUDLR = [
                  (place[rowIdx - 1] || '')[colIdx],
                  (place[rowIdx + 1] || '')[colIdx],
                  rowArr[colIdx - 1] || '',
                  rowArr[colIdx + 1] || '',
              ].filter(mark => mark === "P").length
              return (mark === "P" && checkUDLR > 0) || (mark === "O" && checkUDLR > 1)
          })
      ) ? 0 : 1
  })
  return answer;
}