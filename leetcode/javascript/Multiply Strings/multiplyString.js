// 두 정수를 담은 문자열 num1과 num2의 정수를 곱한 값을 문자열로 return하는 문제
// 입력된 값 num1, num2를 정수형으로 바꾸어선 안되고, BigInteger 라이브러리도 사용하면 안된다.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  let firstNumber = [...num1];
  let secondNumber = [...num2];

  firstNumber.reverse();
  secondNumber.reverse();

  const resultLen = firstNumber.length + secondNumber.length;
  const answer = new Array(resultLen).fill(0);

  for (let num2Index = 0; num2Index < secondNumber.length; num2Index++) {
    let digit2 = Number(secondNumber[num2Index]);

    for (let num1Index = 0; num1Index < firstNumber.length; num1Index++) {
      let digit1 = Number(firstNumber[num1Index]);
      let currentPos = num1Index + num2Index;

      let carry = answer[currentPos];
      let multiplication = digit1 * digit2 + carry;

      answer[currentPos] = multiplication % 10;
      answer[currentPos + 1] += Math.floor(multiplication / 10);
    }
  }

  if (answer[answer.length - 1] == 0) {
    answer.pop();
  }

  answer.reverse();
  return answer.join('');
};

// BigInteger 라이브러리 사용, num1, num2 정수로 변환 가능시 한줄..
// var multiply = function(num1, num2) {
//     return (BigInt(num1) * BigInt(num2)).toString()
// };
