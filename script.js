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
    if (this.head === null) return null;
    return this.head.data;
  }
}

// 配列を受け取って逆向きの配列を返す関数スタック
// [1,2,3] -> [3,2,1]
function reserve(arr) {
  let stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  let result = [];

  while (stack.peek() !== null) {
    result.push(stack.pop());
  }
  return result;
}
console.log(reserve([1, 2, 3]));
