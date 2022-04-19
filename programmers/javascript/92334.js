function solution(id_list, report, k) {
  const answer = new Array(id_list.length)
  answer.fill(0);
  const reportObj = {}

  id_list.map((user) => reportObj[user] = []);

  report.map((report) => {
      const [userId, reportId] = report.split(' ');
      if(!reportObj[reportId].includes(userId)){
          reportObj[reportId].push(userId)
      }
  })

  for(const key in reportObj){
      if(reportObj[key].length >= k){
          reportObj[key].map((user)=>{
              answer[id_list.indexOf(user)] += 1
          })
      }
  }
  return answer;
}
