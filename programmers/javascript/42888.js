var answer = [];
var record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];
var recordArr = [];
record.forEach((e) => {
  recordObj = {};
  const arr = e.split(' ');
  for (let i = 0; i < arr.length; i++) {
    recordObj[i] = arr[i];
  }
  recordArr.push({ ...recordObj });
});

recordArr.forEach((e) => {
  if (e[0] === 'Enter') {
    answer.push(`${e[2]}님이 들어왔습니다.`);
  } else if (e[0] === 'Leave') {
    answer.push(`${e[2]}님이 나갔습니다.`);
  } else {
    answer;
  }
});

console.log(answer);
