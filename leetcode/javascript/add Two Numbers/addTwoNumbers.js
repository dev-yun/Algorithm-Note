// Linked list 자료구조로 구현된 l1, l2 노드의 value와 next값을 계산하여
// 결과 값을 answer Linked List에 담아 출력하는 문제이다.

// 새로운 노드를 만들어서 val, next를 구하고 다시 다음 next 노드에 new Linked List를 할당하여
// next에 value와 next를 만드는 방식으로 접근한다.

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
  let current = answer;
  let carry = false;

  let val = node1.val + node2.val;
  if (val >= 10) {
    val = val % 10;
    carry = true;
  }
  current.val = val;

  while (node1.next || node2.next) {
    node1 = node1.next || new ListNode();
    node2 = node2.next || new ListNode();
    current.next = new ListNode();
    current = current.next;
    val = node1.val + node2.val;
    if (carry) {
      val++;
      carry = false;
    }
    if (val >= 10) {
      val = val % 10;
      carry = true;
    }
    current.val = val;
  }
  if (carry) {
    current.next = new ListNode(1);
  }
  return answer;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
