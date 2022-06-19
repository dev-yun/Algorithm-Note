// 선행스킬이 있는 스킬일 경우 (skill로 주어짐) 다음스킬을 배우려면 이전 스킬을 배운 상태여야 하고
// 선행스킬이 없는 스킬일 경우 순서에 상관없이 배울 수 있다.
// skill_trees가 주어질때 가능한 스킬트리 개수를 구하여라

// 조건 1. skill의 순서대로 배치되어야 한다.
// 조건 2. skill의 이전 스킬이 있어야한다.


// 좋은 풀이

function solution(skill, skill_trees) {
  var answer = 0;
  const orderSkillTree = new Array(skill_trees.length).fill("");
  
  
  skill_trees.filter((skillTree,idx) => {
    for(let i = 0; i < skillTree.length; i++){
      if(skill.includes(skillTree[i])) orderSkillTree[idx] += skillTree[i]
    }
  })
  
  orderSkillTree.forEach(skillTree => {
      if(skillTree === skill.substring(0, skillTree.length)) answer += 1;
  })
  
  return answer;
}


// // 틀린 풀이

// function solution(skill, skill_trees) {
//   var answer = 0;
//   let isRightSkillTree = false;

//   skill_trees.forEach(skillTree => {
//       for(let i = 1; i < skill.length; i++){
//           // 이전 스킬이 있을때
//           if(skillTree.includes(skill[i-1])){
//               //이전 스킬보다 다음 스킬의 index번호가 크거나 다음 스킬이 없을때
//               if(skillTree.indexOf(skill[i-1]) < skillTree.indexOf(skill[i]) || skillTree.indexOf(skill[i]) === -1){
//                   isRightSkillTree = true;
//               }
//               // 이전 스킬보다 다음 스킬의 index번호가 작고 다음 스킬이 있을때 
//               else {
//                   isRightSkillTree = false;
//                   break;
//               }
//           }else{
//               // 이전스킬은 없는데 다음 스킬은 있을때 
//               if(skillTree.includes(skill[i])){
//                   isRightSkillTree = false;
//                   break;
//               }
//               // skill과 겹치는 스킬이 없을때 (순서가 상관없는 스킬들만 존재)
//               isRightSkillTree = true;
//           }
//       }
//       if(isRightSkillTree) answer += 1;
//   })
  
//   return answer;
// }