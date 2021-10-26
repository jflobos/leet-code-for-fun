/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if (head === null) return null;
  const elements = [];
  while(head!== null) {
      elements.push(head.val);
      head = head.next;
  }
  let headVal = elements.pop()
  const reversed = new ListNode(headVal, null);
  let reversedHead = reversed;
  while(elements.length > 0) {
      const currentHeadVal = elements.pop();
      reversedHead.next = new ListNode(currentHeadVal, null);
      reversedHead = reversedHead.next;
  }
  return reversed;
};