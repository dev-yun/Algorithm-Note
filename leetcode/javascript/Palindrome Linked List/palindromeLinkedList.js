// 주어진 리스트가 뒤집어도 같은 값을 갖는지 확인하는 문제

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const stack = [];

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  return stack.join() === [...stack].reverse().join() ? true : false;
};
