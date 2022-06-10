function solution(answers) {
  var answer = [];
  const count = [0, 0, 0]
  const firstStudent = [1,2,3,4,5]
  const secondStudent = [2,1,2,3,2,4,2,5]
  const thirdStudent = [3,3,1,1,2,2,4,4,5,5]
  
  for(let i = 0; i < answers.length; i++){
      if(answers[i] === firstStudent[i%firstStudent.length]) count[0] += 1;
      if(answers[i] === secondStudent[i%secondStudent.length]) count[1] += 1;
      if(answers[i] === thirdStudent[i%thirdStudent.length]) count[2] += 1;
  }
  const maxCorrect = Math.max(...count)
  
  count.forEach((e,idx) => {
      if(e === maxCorrect) answer.push(idx + 1);
  })
  
  return answer;
}