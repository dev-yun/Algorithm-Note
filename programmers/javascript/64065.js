function solution(s) {
  var answer = []
  s = s.split("{").join().split("}").join().split(",")
  const obj = {}

  s.forEach(e => {
    if(e!==""){
      obj[e] = 0
    }
  })

  s.forEach(e => {
    if(e!==""){
      obj[e]++
    }
  })

  const objSort = Object.entries(obj).sort(([, a], [, b]) => b - a);

  objSort.forEach(e => answer.push(parseInt(e[0])))
  
  return answer
}