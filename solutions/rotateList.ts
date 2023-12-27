class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head;

  let length = 1;
  let a = head;
  while (a.next) {
    a = a.next;
    length++;
  }

  for (let i = 0; i < k % length; i++) {
    let a = head;
    while (a.next && a.next?.next !== null) {
      a = a.next;
    }
    let b = a.next;
    a.next = null;
    b.next = head;
    head = b;
  }
  return head;
}
