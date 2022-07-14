const getTargetIndex = (word, sortedWord, startIndex, endIndex) => {
    const words = word.slice(startIndex, endIndex);
    let index = 0;
    for(const w of sortedWord){
        if(words.includes(w)){
            index = word.indexOf(w);
            break;
        }
    }

    return [index, word.slice(startIndex, index + 1).split("").reverse()]
}

const findSortedWord = () => {
    // 백준 입력값 word로 읽어오기
    let word = "caba"

    const baseWord = word;
    const sortedWord = word.split("").sort();

    let [firstIndex, firstWords] = getTargetIndex(baseWord, sortedWord, 0, baseWord.length - 2);
    let [secondIndex, secondWords] = getTargetIndex(baseWord, sortedWord, firstIndex+1, baseWord.length - 1);
    let lastWords = baseWord.slice(secondIndex + 1).split("").reverse();

    const result = firstWords.concat(secondWords, lastWords);
    console.log(result.join(""))    
}

findSortedWord();