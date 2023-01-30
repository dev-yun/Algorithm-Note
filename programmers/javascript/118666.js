function solution(survey, choices) {
  const scoreList = [3, 2, 1, 0, 1, 2, 3];
  const surveyResult = ['RT', 'CF', 'JM', 'AN'];
  const surveyMap = new Map();

  survey.forEach((e, idx) => {
    const [left, right] = e.split('');
    const score = scoreList[choices[idx] - 1];
    if (choices[idx] > 4) {
      surveyMap.has(right)
        ? surveyMap.set(right, surveyMap.get(right) + score)
        : surveyMap.set(right, score);
    } else if (choices[idx] < 4) {
      surveyMap.has(left)
        ? surveyMap.set(left, surveyMap.get(left) + score)
        : surveyMap.set(left, score);
    }
  });

  return surveyResult
    .map((e) => {
      const [left, right] = e.split('').sort();
      const leftSurveyValue = surveyMap.has(left) ? surveyMap.get(left) : 0;
      const rightSurveyValue = surveyMap.has(right) ? surveyMap.get(right) : 0;
      return leftSurveyValue >= rightSurveyValue ? left : right;
    })
    .join('');
}
