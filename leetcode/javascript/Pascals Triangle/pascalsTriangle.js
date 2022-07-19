/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const output = Array.from({length : numRows}, () => []);
    
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j <= i; j++){
            if(j === 0 || j === i){
                output[i].push(1)
            }else{
                output[i].push(output[i-1][j-1] + output[i-1][j])
            }
        }
    }
    
    return output
};

