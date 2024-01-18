class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const Three = new Node(3, null);
const Two = new Node(2, Three);
const One = new Node(1, Two);

console.log(One);

//now we have  a linked list
// 1 → 2 → 3

const reverseLinkedList = list => {
  let node = list;
  let prev = null;
  while (node !== null) {
    [node.next, node, prev] = [prev, node.next, node];
  }
  return prev;
};

reverseLinkedList(One);

console.log(Three);
