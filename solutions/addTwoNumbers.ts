class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let temp = 0;
  let head: ListNode | null = null;
  let l: ListNode | null = null;

  if (l1 !== null && l2 !== null) {
    l = new ListNode((l1.val + l2.val + temp) % 10);
    head = l;
    temp = Math.floor((l1.val + l2.val + temp) / 10);
    l1 = l1.next;
    l2 = l2.next;
    while (l1 !== null && l2 !== null) {
      l.next = new ListNode((l1.val + l2.val + temp) % 10);
      temp = Math.floor((l1.val + l2.val + temp) / 10);
      l = l.next;
      l1 = l1.next;
      l2 = l2.next;
    }
  }

  if (l1 !== null) {
    if (l == null) {
      l = new ListNode((l1.val + temp) % 10);
      temp = Math.floor((l1.val + temp) / 10);
      head = l;
      l1 = l1.next;
    }
    while (l1 !== null) {
      l.next = new ListNode((l1.val + temp) % 10);
      temp = Math.floor((l1.val + temp) / 10);
      l = l.next;
      l1 = l1.next;
    }
  } else if (l2 !== null) {
    if (l == null) {
      l = new ListNode((l2.val + temp) % 10);
      temp = Math.floor((l2.val + temp) / 10);
      head = l;
      l1 = l2.next;
    }
    while (l2 !== null) {
      l.next = new ListNode((l2.val + temp) % 10);
      temp = Math.floor((l2.val + temp) / 10);
      l = l?.next;
      l2 = l2.next;
    }
  }

  if (temp > 0 && l !== null) {
    l.next = new ListNode(temp);
  }

  return head;
}
