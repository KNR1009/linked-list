class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  peekFront() {
    if (this.head === null) return null;
    return this.head.data;
  }

  peekBack() {
    if (this.tail == null) return null;
    return this.tail.data;
  }

  // 前側からデータの挿入
  enqueueFront(data) {
    // データが存在しない時
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = new Node(data);
    } else {
      let temp = this.head;
      let node = new Node(data);
      this.head.prev = node;
      node.next = temp;
      this.head = node;
    }
  }

  // 後ろ側からデータを挿入
  enqueueBack(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = new Node(data);
    } else {
      let node = new Node(data);
      let temp = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.tail.prev = temp;
    }
  }

  // 前側から削除

  dequeueFront() {
    if (this.head == null) return null;

    let temp = this.head;
    this.head = this.head.next;
    if (this.head != null) this.head.prev = null;
    else this.tail = null;
    return temp.data;
  }

  dequeueBack() {
    if (this.tail == null) return null;

    let temp = this.tail;
    this.tail = this.tail.prev;

    //update the tail
    if (this.tail != null) this.tail.next = null;
    else this.head = null;
    return temp.data;
  }

  // リストの最大値を求める
  // 両端から挿入できる強みを生かす
  // 反復で現在の最大値を先頭に置き、そうでなければ後ろに置く
}

function getMax(arr) {
  let deque = new Deque();
  // 両端に値をセット
  deque.enqueueFront(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (deque.peekFront() < arr[i]) {
      deque.enqueueFront(arr[i]);
    } else {
      deque.enqueueBack(arr[i]);
    }
  }
  return deque.peekFront();
}

console.log(getMax([1, 2, 3, 10, 4, 6]));
