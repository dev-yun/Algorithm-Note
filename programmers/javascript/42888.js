function solution(record) {
  var userIdLog = [];
  var answer = [];
  const userIdName = {};

  record.forEach(e => {
      const [state, userId, name] = e.split(" ");
      
      if(state === "Enter"){
          userIdLog.push([userId, "님이 들어왔습니다."]);
      }
      if(state === "Leave"){
          userIdLog.push([userId, "님이 나갔습니다."]);
          return;
      }
      userIdName[userId] = name;
  })


  userIdLog.map((e) => answer.push(userIdName[e[0]] + e[1]))
  return answer
}