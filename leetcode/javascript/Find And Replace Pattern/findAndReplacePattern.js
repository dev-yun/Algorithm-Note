// words의 단어들 중 pattern으로 주어진 문자열의 패턴과 같은 단어를 찾아라.

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    const output = [];
    const target = replaceWordToIndex(pattern);
    
    for(const word of words){
        const wordIndex = replaceWordToIndex(word);
        
        if(wordIndex === target){
            output.push(word);
        }
    }
    
    return output
};

function replaceWordToIndex (str){
    let result = ""
    for(let i = 0; i < str.length; i++){
        result += str.indexOf(str[i]);
    }
    return result;
}
