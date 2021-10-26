/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * There is a specific algorithm to be used for detecting cycles
 * https://en.wikipedia.org/wiki/Cycle_detection
 * Floyd: Tortoise and hare
 * 
 * If there is a cycle in the structure, a faster and slower algorithm will point
 * to the same element of the linked list.
 */
 var hasCycle = function(head) {
  if (!head) return false;
  let tortoise = head.next
  if (!tortoise) return false;
  let hare = head.next.next;
  while(tortoise !== null && hare !== null) {
      if (tortoise === hare) {
          return true;
      }
      tortoise = tortoise.next;
      if (hare.next === null) {
          return false;
      }
      hare = hare.next.next;
  }
  return false;
};