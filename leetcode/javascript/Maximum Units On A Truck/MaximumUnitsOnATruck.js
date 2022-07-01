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