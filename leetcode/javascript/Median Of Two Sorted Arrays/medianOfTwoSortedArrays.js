/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 시간 복잡도를 고려한 풀이
 var findMedianSortedArrays = function(nums1, nums2) {
    const mergeArr = [];
    let indexOne = 0;
    let indexTwo = 0;
    const totalLen = nums1.length + nums2.length;
    const midIndex = totalLen % 2 === 0 ?  [totalLen / 2 - 1,  totalLen / 2] : [Math.floor(totalLen / 2)] ;
    
    while(mergeArr.length <= midIndex[0] + 1){
        if(nums1[indexOne] > nums2[indexTwo] || nums1[indexOne] === undefined){
            mergeArr.push(nums2[indexTwo])
            indexTwo++;
        }else{
            mergeArr.push(nums1[indexOne])
            indexOne++;
        }
    }
    
    return midIndex.length === 2 ? (mergeArr[midIndex[0]] + mergeArr[midIndex[1]]) / 2 : mergeArr[midIndex[0]];
};

// sort를 사용한 풀이

// var findMedianSortedArrays = function(nums1, nums2) {
//     const mergeArr = [...nums1,...nums2].sort((a,b) => a-b);
//     const totalLen = mergeArr.length;
//     const midIndex = totalLen % 2 === 0 ?  [totalLen / 2 - 1,  totalLen / 2] : [Math.floor(totalLen / 2)]
    
//     return midIndex.length === 2 ? (mergeArr[midIndex[0]] + mergeArr[midIndex[1]]) / 2 : mergeArr[midIndex[0]];
// };