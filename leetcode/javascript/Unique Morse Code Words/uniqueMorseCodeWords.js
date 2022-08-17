// 주어진 모스 기호는 알파벳 소문자의 번호와 일치한다.
// 단어가 주어질때, 해당 단어의 모스기호를 구해 배열에 저장하고
// 중복되지 않는 모스기호의 개수를 구하는 문제이다.

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morseSign = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  const morseCodeArr = [];

  words.forEach((word) => {
    let morseCode = '';
    for (let char of word) {
      morseCode += morseSign[char.charCodeAt() - 97];
    }
    morseCodeArr.push(morseCode);
  });

  return new Set(morseCodeArr).size;
};
