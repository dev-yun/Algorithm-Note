/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    
    let dummyLess = new ListNode(-1);
    let dummyGreat = new ListNode(-1);
    
    let lessPtr = dummyLess;
    let greatPtr = dummyGreat;
    
    
    let curr = head;
    
    while(curr){
        if(curr.val >= x){
            greatPtr.next = new ListNode(curr.val)
            greatPtr = greatPtr.next
        }else{
            lessPtr.next = new ListNode(curr.val)
            lessPtr = lessPtr.next
        }
        curr = curr.next
    }
    
    lessPtr.next = dummyGreat.next
 
    return dummyLess.next
};