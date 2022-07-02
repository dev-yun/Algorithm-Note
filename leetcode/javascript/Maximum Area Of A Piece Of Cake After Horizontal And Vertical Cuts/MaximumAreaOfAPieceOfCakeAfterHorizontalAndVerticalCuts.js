// 전체 높이(h), 폭(w)이 주어지고, 수평으로 자르는 부분(horizontalCuts), 수직으로 자르는 부분(verticalCuts)가 주어질 때
// 잘려진 부분 중 최대 값을 구하라.

// 가로 길이 : [0, horizontalCut, h]의 요소 사이의 크기
// 세로 길이 : [0, verticalCut, w]의 요소 사이의 크기

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  // 1. 0과 w, 0과 h을 추가한 새로운 horizon, vertical을 구하고 정렬한다.
  const newHorizontalCuts = [0, ...horizontalCuts, h].sort((a,b) => a - b);
  const newVerticalCuts = [0, ...verticalCuts, w].sort((a,b) => a - b);
  
  const cuttedHLen = [];
  const cuttedWLen = [];
  
  // 2. newHorizontalCuts과 newVerticalCuts의 요소간 거리를 구한다.
  for(let i = 1; i < newHorizontalCuts.length; i++){
      cuttedHLen.push(newHorizontalCuts[i] - newHorizontalCuts[i-1]);
  }
  for(let i = 1; i < newVerticalCuts.length; i++){
      cuttedWLen.push(newVerticalCuts[i] - newVerticalCuts[i-1]);
  }
  
  // 3. 구한 값이 매우 큰 값일 수 있으므로 1e9 + 7의 나머지를 구한다.
  let maxArea = BigInt(Math.max(...cuttedHLen)) * BigInt(Math.max(...cuttedWLen));
  
  
  return maxArea % BigInt(1e9 + 7)
};