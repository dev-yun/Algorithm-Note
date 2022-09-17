// words의 두 요소를 합쳤을때, 뒤집어도 같은 경우 두 요소의 index번호 쌍을 return하는 문제
// 0 <= words.length <= 5000 이라서 완전탐색도 문제 없을듯하다.

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const output = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPalindrome(words[i] + words[j])) {
        output.push([i, j]);
      }
      if (isPalindrome(words[j] + words[i])) {
        output.push([j, i]);
      }
    }
  }

  return output;
};

const isPalindrome = (word) => {
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] === word[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
};

// var palindromePairs = function(words) {
//     const output = [];

//     for(let i = 0; i < words.length; i++){
//         for(let j = 0; j < words.length; j++){
//             if(i !== j){
//                 const concatWord = words[i] + words[j];
//                 const reversedWord = concatWord.split("").reverse().join("");

//                 if(concatWord === reversedWord){
//                     output.push([i, j])
//                 }
//             }
//         }
//     }

//     return output;
// };
