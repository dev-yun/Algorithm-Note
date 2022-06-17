/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let answer = new ListNode();
  let node1 = l1;
  let node2 = l2;
  let currunt = answer;
  let carry = false;

  let val = node1.val + node2.val;
  if (val >= 10) {
    val = val % 10;
    carry = true;
  }
  currunt.val = val;

  while (node1.next || node2.next) {
    node1 = node1.next || new ListNode();
    node2 = node2.next || new ListNode();
    currunt.next = new ListNode();
    currunt = currunt.next;
    val = node1.val + node2.val;
    if (carry) {
      val++;
      carry = false;
    }
    if (val >= 10) {
      val = val % 10;
      carry = true;
    }
    currunt.val = val;
  }
  if (carry) {
    currunt.next = new ListNode(1);
  }
  return answer;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 아래처럼 배열문제인줄 알고 풀었는데 자세히 보니 linked List 클래스를 구현하여
// linked List의 value와 next를 구하는 문제였다.

// // 주어진 배열 nums에서 두 수를 더해 target 값을 만들 수 있는
// // nums elements의 index 번호를 구하는 문제이다.

// // target값에서 nums[i]를 뺀 값이 nums에 있는지 탐색하고
// // 있으면 answer에 넣어 값을 구한다.

// var twoSum = function (nums, target) {
//   let answer = [];

//   for (let i = 0; i < nums.length; i++) {
//     const findVal = target - nums[i];
//     if (nums.indexOf(findVal) !== -1 && nums.indexOf(findVal) !== i) {
//       answer = [i, nums.indexOf(findVal)];
//       break;
//     }
//   }

//   return answer;
// };
