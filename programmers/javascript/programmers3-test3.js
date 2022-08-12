// 야간 전술 보행 1m/s로 나아간다.
// 화랑이의 침입 경로에는 경비병들이 감시하며 일정시간동안 근무와 휴식을 반복
// 화랑이는 경비병의 근부 정보를 모르고, 화랑이가 출발할때 모든 경비병은 근무 시작
// 화랑이가 경비를 피해 최대 이동할 수 있는 거리를 구하여라
// 조건 1. 경비원의 근무 구간은 정렬되어있지 않는다. (scope으로 주어짐)

// n(거리) % times의 합 <= 근무 시간 일경우 발각!

function solution(distance, scope, times) {
  var answer = distance;
  let sumWorkRest = [];

  for (let time of times) {
    sumWorkRest.push(time[0] + time[1]);
  }

  for (let i = 0; i < scope.length; i++) {
    const workStart = Math.min(...scope[i]);
    const workEnd = Math.max(...scope[i]);

    if (
      0 < workStart % sumWorkRest[i] &&
      workStart % sumWorkRest[i] <= times[i][0]
    ) {
      answer = workStart;
      break;
    } else if (
      0 < workEnd % sumWorkRest[i] &&
      workEnd % sumWorkRest[i] <= times[i][0]
    ) {
      answer = parseInt(workEnd / sumWorkRest[i]) * sumWorkRest[i] + 1;
      break;
    }
  }

  return answer;
}
