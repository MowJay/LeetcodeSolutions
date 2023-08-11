/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  const preHead = new ListNode(undefined, head);

  let current = head;
  let pre = preHead;
  let temp: ListNode | null = null;

  while (current?.next) {
    temp = current.next;
    current.next = current.next.next;
    temp.next = current;
    pre.next = temp;
    pre = current;
    current = current.next;
  }

  return preHead.next;
}
