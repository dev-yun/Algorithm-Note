// 매우동의 ~ 매우 비동의까지 고정적 크기의 점수 3 ~ -3까지 (-는 아님)
// 무조건 동의가 한쪽, 비동의가 반대 쪽을 의미하진 않음
// 만약 점수가 같다면 사전순으로 빠른 성격을 판단
//

survey = ['TR', 'RT', 'TR'];
choices = [7, 1, 3];

var answer = '';
const resultSurvey = [];
const personalityType = ['T', 'R', 'C', 'F', 'J', 'M', 'A', 'N'];
const score = [3, 2, 1, 0, 1, 2, 3];
const surveyArr = [];

survey.forEach((e) => {
  surveyArr.push(e.split(''));
});

personalityType.forEach((e) => (resultSurvey[e] = 0));

surveyArr.forEach((e, idx) => {
  if (choices[idx] > 4) resultSurvey[e[1]] += score[choices[idx] - 1];
  else if (choices[idx] < 4) resultSurvey[e[0]] += score[choices[idx] - 1];
  else return;
});

resultSurvey['T'] >= resultSurvey['R'] ? (answer += 'T') : (answer += 'R');
resultSurvey['C'] >= resultSurvey['F'] ? (answer += 'C') : (answer += 'F');
resultSurvey['J'] >= resultSurvey['M'] ? (answer += 'J') : (answer += 'M');
resultSurvey['A'] >= resultSurvey['N'] ? (answer += 'A') : (answer += 'N');
