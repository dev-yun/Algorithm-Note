const solution = (n, k) => {
  let primeCnt = 0;

  const arr = n.toString(k).split('0');

  for (let i = 0; i < arr.length; i++) {
    //if(arr[i] === "") continue;
    if (isPrime(Number(arr[i]))) primeCnt++;
  }
  return primeCnt;
};

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
};
