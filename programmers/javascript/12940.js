function solution(n, m) {
  var answer = [];
  let gcd = 0;
  let lcm = 0;

  if (n < m) {
    gcd = getGCD(n, m);
    lcm = getLCM(n, m, gcd);
  } else if (n > m) {
    gcd = getGCD(m, n);
    lcm = getLCM(m, n, gcd);
  } else {
    gcd = n;
    lcm = n;
  }
  answer = [gcd, lcm];
  return answer;
}

const getGCD = (small, large) => {
  let resultGCD = 0;
  for (let i = 1; i <= small; i++) {
    if (large % i === 0 && small % i === 0) {
      resultGCD = i;
    }
  }
  return resultGCD;
};

const getLCM = (small, large, gcd) => {
  return (small * large) / gcd;
};
