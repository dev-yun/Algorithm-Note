function solution(a, b) {
  var answer = '';
  const weekObj = {
    1: 'FRI',
    2: 'SAT',
    3: 'SUN',
    4: 'MON',
    5: 'TUE',
    6: 'WED',
    0: 'THU',
  };
  let totalDay = getTotalDay(a, b);
  answer = weekObj[totalDay % 7];
  return answer;
}

const getTotalDay = (month, day) => {
  let totalDay = 0;
  const monthLengthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 0; i < month - 1; i++) {
    totalDay += monthLengthArr[i];
  }
  totalDay += day;

  return totalDay;
};
