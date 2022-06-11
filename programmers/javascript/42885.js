// 효율성 탈락

function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  while (people.length) {
    if (people[0] + people[people.length - 1] > limit) {
      people.pop();
      answer++;
    } else {
      people.pop();
      people.shift();
      answer++;
    }
  }

  return answer;
}

// 효율성 통과

function solution(people, limit) {
  var answer = 0;
  let lightPerson = 0;
  let heavyPerson = people.length - 1;
  people.sort((a, b) => a - b);

  while (lightPerson <= heavyPerson) {
    if (people[lightPerson] + people[heavyPerson] > limit) {
      heavyPerson--;
      answer++;
    } else {
      heavyPerson--;
      lightPerson++;
      answer++;
    }
  }

  return answer;
}
