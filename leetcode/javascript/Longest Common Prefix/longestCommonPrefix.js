/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  strs.sort((a, b) => a.length - b.length);
  let subStr = strs[0];
  
  if(strs.length === 1) return subStr;
  
  strs.slice(1).forEach(nextWord => {
      for(let i = 0; i < subStr.length; i++){
          if(subStr[i] !== nextWord[i]) {
              subStr = subStr.slice(0,i)
              break;
          }
      }
  })
  return subStr 
};