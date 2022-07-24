// 행을 기준으로도 열을 기준으로도 모두 오름차순으로 정렬된 2차원 배열이 있다.
// 이때 주어진 target 숫자가 행렬에 존재하는지 구하여라..

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    
    let curRow = rowLen - 1;
    let curCol = 0;
    
    while(curRow >= 0 && curCol < colLen){
        const curVal = matrix[curRow][curCol];
        
        if(curVal > target){
            curRow--;
        }else if(curVal < target){
            curCol++;
        }else{
            return true;
        }
    }
    
    return false;
};