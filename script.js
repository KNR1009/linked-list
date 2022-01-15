class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  // 先頭にデータを追加する
  push(data) {
    let temp = this.head;
    this.head = new Node(data);
    this.head.next = temp;
  }

  // 先頭のデータを出力
  pop() {
    let temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }
  // 先頭のデータを読み込み
  peek() {
    return this.head.data;
  }
}

let s = new Stack();
s.push(new Node(5));
s.push(new Node(2));
console.log(s.peek());
