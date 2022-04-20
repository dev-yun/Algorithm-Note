function solution(lottos, win_nums) {
  var answer = [];
  let correctNumCount = 0;
  let zeros = 0;
  
  lottos.map((num) => win_nums.includes(num) ? correctNumCount += 1 : correctNumCount)
  lottos.map((num) => (num === 0) && (zeros += 1))
  
  const low = 7-correctNumCount <= 5 ? 7-correctNumCount : 6;
  const high = low-zeros <= 1 ? 1 : low-zeros;
  
  answer = [high, low];
  
  
  return answer;
}