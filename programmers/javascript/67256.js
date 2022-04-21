function getDistance(num1, num2){
  let keyObj = {1 : [3,0], 2 : [3,1], 3 : [3,2],
                4 : [2,0], 5 : [2,1], 6 : [2,2],
                7 : [1,0], 8 : [1,1], 9 : [1,2],
                '*': [0,0], 0 : [0,1], '#' : [0,2]}
  return (Math.abs(keyObj[num1][0] - keyObj[num2][0]) + Math.abs(keyObj[num1][1] - keyObj[num2][1]))
}

function solution(numbers, hand) {
  var answer = [];
  let left = '*';
  let right = '#';

  numbers.map((num) => {
      if([1,4,7].includes(num)){
              answer.push("L"); 
              left = num;
      }else if([3,6,9].includes(num)) {
              answer.push("R"); 
              right = num;
      }else if([2,5,8,0].includes(num)){ 
          if(hand === "left") {
              if(getDistance(num,left) <= getDistance(num, right)){
                  answer.push("L");
                  left = num;
              }else{
                  answer.push("R");
                  right = num;
              }
          }else if(hand === "right"){
              if(getDistance(num,right) <= getDistance(num, left)){
                  answer.push("R");
                  right = num;
              }else{
                  answer.push("L");
                  left = num;
              }
          }
      }
  })

  answer = answer.join("")

  return answer;
}