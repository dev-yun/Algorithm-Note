function solution(numbers) {
  var answer = 0;
  numbers = numbers.split('');
  const permutationArr = [];

  for (let selectNumber = 1; selectNumber <= numbers.length; selectNumber++) {
    permutationArr.push(
      ...getPermutations(numbers, selectNumber)
        .map((e) => e.join(''))
        .map((e) => parseInt(e))
    );
  }

  const permutationSet = [...new Set(permutationArr)].map((e) => parseInt(e));

  permutationSet.forEach((e) => {
    if (isPrime(e)) answer += 1;
  });

  return answer;
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
};
