// 주어진 linkedList에서 left, right 구간을 reverse하여 반환하는 문제

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    const linkedToArray = [];
     while(head.next) {
        linkedToArray.push(head.val);
         head = head.next;
     }
     linkedToArray.push(head.val)
     
     let start = left-1;
     let end = right-1;
     while(start<=end) {
         [linkedToArray[start], linkedToArray[end]] =[linkedToArray[end], linkedToArray[start]]
         start++;
         end--;
     }
     
     const newLinkedList = new ListNode(linkedToArray[0], null)
     let currentHead = newLinkedList 
     for(let i =1; i<linkedToArray.length; i++) {
         const temp  = new ListNode(linkedToArray[i], null)
         currentHead.next = temp;
         currentHead = temp;
     }
     return newLinkedList;
 };