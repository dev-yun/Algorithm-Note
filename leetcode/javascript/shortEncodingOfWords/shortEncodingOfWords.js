/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  let setWords = new Set(words);

  words.forEach((word) => {
    if (setWords.has(word)) {
      // word의 subString 중 setWords에 포함된 단어가 있으면 delete
      for (let i = 1; i < word.length; i++) setWords.delete(word.slice(i));
    }
  });

  return Array.from(setWords).join().length + 1;
};
