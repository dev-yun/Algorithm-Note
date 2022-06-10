// 결국 빌려받지 못한 lost의 길이를 구하면 된다.
// 조건 : 여분의 체육복을 가져온 학생이 체육복을 도난당했을 수 있다.

function solution(n, lost, reserve) {
  const setLost = lost.filter(x => !reserve.includes(x));
  const setReserve = reserve.filter(x => !lost.includes(x));
  
  setLost.sort((a,b) => a-b)
  setReserve.sort((a,b) => a-b)
  setReserve.forEach(e => {
      if(setLost.includes(e-1)) setLost.splice(setLost.indexOf(e-1), 1)
      else if(setLost.includes(e+1)) setLost.splice(setLost.indexOf(e+1), 1)
  })
  
  return n - setLost.length;
}