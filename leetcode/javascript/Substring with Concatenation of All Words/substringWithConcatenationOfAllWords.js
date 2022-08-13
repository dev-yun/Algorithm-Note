/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let wordsMap = {};
  let result = [];
  for (const word of words) {
    wordsMap[word] = wordsMap[word] + 1 || 1;
  }
  const wordLen = words[0].length;
  const n = s.length;
  const limit = wordLen * words.length;

  for (let i = 0; i <= n - limit; i++) {
    const newWordMap = { ...wordsMap };
    for (let j = i; j < n; j = j + wordLen) {
      const cur = s.substring(j, wordLen);
      if (newWordMap[cur]) {
        newWordMap[cur]--;
        if (!newWordMap[cur]) {
          delete newWordMap[cur];
        }
      } else {
        break;
      }
      if (Object.keys(newWordMap).length === 0) {
        result.push(i);
        break;
      }
    }
  }

  return result;
};
