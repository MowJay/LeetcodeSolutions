class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let a: ListNode | null = new ListNode(-1, head);
  let b = head;
  let d = 1;

  while (b && d < n) {
    b = b.next;
    d++;
  }

  while (b?.next && a) {
    b = b.next;
    a = a.next;
  }

  if (a?.next) {
    if (a.next === head) {
      a.next = a.next?.next;
      head = a.next;
    } else {
      a.next = a.next?.next;
    }
  }

  return head;
}
