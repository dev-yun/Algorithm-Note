// 학생들은 각자 정수 번호를 가지고 있고 3명의 정수 번호를 더했을때 0이 되면 삼총사가 된다.
// 삼총사를 만들 수 있는 방법의 수를 return 하여라.

// number의 길이는 3 ~ 13이고 각 원소의 크기는 -1000 ~ 1000이다.
// 범위가 좁아서 완전 탐색도 가능하다.
function solution(number) {
    var answer = 0;
    let sum = 0;

    for(let first = 0; first < number.length - 2; first++){
        for(let second = first + 1; second < number.length - 1; second++){
            for(let third = second + 1; third < number.length; third++){
                sum = number[first] + number[second] + number[third];
                if(sum === 0){
                    answer++;
                }else{
                    sum = 0;
                }
            }
        }
    }

    return answer;
}