// 정렬된 2차 행렬을 1차 행렬로 변환했을때 k번째 수를 구하여라 

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    let mergeArr = [];
    matrix.forEach(e => mergeArr = [...mergeArr, ...e]);
    
    mergeArr.sort((a, b) => a - b);
    
    return mergeArr[k - 1]
};