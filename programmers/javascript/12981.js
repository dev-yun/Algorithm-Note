// words 배열에 주어진 단어들로 끝말잇기를 한다.
// 조건에 맞지 않는 단어를 말한 사람의 번호와 몇번째 차례인지 구하여라.

// 조건 0. 앞선 단어의 마지막 단어와 다음 단어의 첫 단어가 같아야한다.
// 조건 1. n의 인원이 돌아가며 단어를 말하고
//      마지막 사람이 단어를 말하면 처음 사람으로 돌아간다.
//      이때 몇번 차례가 돌았는지 count 한다.
// 조건 2. 이전에 등장한 단어는 사용할 수 없다.
//      이전에 등장한 단어를 저장하는 배열.
//      endWords.includes(e) ? 종료 : 계속진행
// 조건 3. 한글자인 단어는 인정되지 않는다.
//      배열 요소의 길이를 조건으로 판단.
// 조건 4. 탈락자가 발생하지 않으면 [0,0] return

function solution(n, words) {
  var answer = [];
  let endWords = [];
  let targetPeople = 0;
  let turn = 0;

  for (let idx = 0; idx < words.length; idx++) {
    let currentWord = words[idx];
    let nextWord = words[idx + 1];

    if (idx === words.length - 1 && !endWords.includes(currentWord)) {
      return [0, 0];
    } else if (idx === words.length - 1 && endWords.includes(currentWord)) {
      break;
    }

    if (
      currentWord.slice(-1) === nextWord.slice(0, 1) &&
      !endWords.includes(currentWord) &&
      currentWord.length !== 1
    ) {
      endWords.push(currentWord);
    } else if (currentWord.length !== 1 && !endWords.includes(currentWord)) {
      endWords.push(currentWord);
      break;
    } else break;
  }

  targetPeople = (endWords.length % n) + 1;
  turn = Math.ceil((endWords.length + 1) / n);

  answer = [targetPeople, turn];
  return answer;
}
