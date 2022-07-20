// 주어진 문자열 s를 통해 만들 수 있는 words의 문자열의 개수를 구하는 문제
// 조건 : 꼭 연결된 문자열이 아니여도 된다. (s = "abcde" words = ["ace"] 면 가능한 경우)

// 처음 작성 코드(몇몇 케이스 미통과)
// /**
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number}
//  */
//  var numMatchingSubseq = function(s, words) {
//     let output = 0;
    
//     words.forEach(word => {
//         if(isIncludesWord(s, word)) output++;
//     })
    
//     return output;
// };

// const isIncludesWord = (baseStr, subStr) => {
//     if(baseStr.includes(subStr)) return true
    
//     baseIndex = 0;
//     subIndex = 0;
    
//     while(baseIndex < baseStr.length && subIndex < subStr.length){
//         if(baseStr[baseIndex] === subStr[subIndex]){
//             baseIndex++;
//             subIndex++;
//         }else{
//             baseIndex++;
//         }
//     }
    
//     return subIndex === subStr.length ? true : false;
// }


// 효율성 높힌 코드
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
 var numMatchingSubseq = function(s, words) {
    let output = 0;
    
    words.forEach(word => {
        if(isIncludesWord(s, word)) output++;
    })
    
    return output;
};

const isIncludesWord = (baseStr, subStr) => {
    let cur = 0;
    
    for(let subIndex = 0 ; subIndex < subStr.length; subIndex++){
        const baseIndex = baseStr.indexOf(subStr[subIndex], cur)
        if(baseIndex === -1){
            return false;
        }
        cur = baseIndex + 1;
    }
    
    return true;
}