class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  peekFront() {
    if (this.head === null) return null;
    return this.head.data;
  }

  peekBack() {
    if (this.tail === null) return null;
    return this.tail.data;
  }

  enqueue(data) {
    if (this.head === null) {
      // データが空の時
      this.head = new Node(data);
    } else if (this.tail === null) {
      // データが1個の時
      this.tail = new Node(data);
      this.head.next = this.tail;
    } else {
      // データが2個以上存在する時
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
  }
}

const t = new Queue();
t.enqueue(1);
t.enqueue(2);
t.enqueue(3);
console.log(t);
