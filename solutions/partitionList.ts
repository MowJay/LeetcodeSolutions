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

function partition(head: ListNode | null, x: number): ListNode | null {
  let lessHead: ListNode | null = null;
  let lessTail: ListNode | null = null;
  let moreHead: ListNode | null = null;
  let moreTail: ListNode | null = null;
  let current: ListNode | null = head;

  while (current) {
    if (current.val < x) {
      if (!lessHead || !lessTail) {
        lessHead = new ListNode(current.val);
        lessTail = lessHead;
      } else {
        lessTail.next = new ListNode(current.val);
        lessTail = lessTail.next;
      }
    } else {
      if (!moreHead || !moreTail) {
        moreHead = new ListNode(current.val);
        moreTail = moreHead;
      } else {
        moreTail.next = new ListNode(current.val);
        moreTail = moreTail.next;
      }
    }
    current = current.next;
  }

  if (lessTail) {
    if (moreHead) lessTail.next = moreHead;
    return lessHead;
  } else {
    return moreHead;
  }
}
