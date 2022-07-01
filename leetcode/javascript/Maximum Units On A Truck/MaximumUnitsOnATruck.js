// boxTypes에는 [박스 갯수, 박스당 담을 수 있는 물건의 수]가 들어있고
// truckSize에는 최대 실을 수 있는 박스의 갯수가 주어진다.
// 이때 트럭에 담을 수 있는 최대 물건의 수를 구하라.

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
  let output = 0;
  let boxCnt = 0;
  
  boxTypes.sort((a,b) => b[1] - a[1])

  boxTypes.forEach(boxType => {
      let [box, items] = boxType;
      if((boxCnt + box) < truckSize){
          output += box * items;
          boxCnt += box;
      }else{
          output += (truckSize - boxCnt) * items;
          boxCnt += (truckSize - boxCnt);
          return false;
      }
  })
  
  return output;   
};