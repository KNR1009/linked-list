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

  push(data) {
    let temp = this.head;
    this.head = new Node(data);
    this.head.next = temp;
  }

  pop() {
    if (this.head == null) return null;
    let temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  peek() {
    if (this.head === null) return null;
    return this.head.data;
  }
}

function reverse(arr) {
  let stack = new Stack();
  for (let i = 0; i < arr.length; i++) stack.push(arr[i]);
  let reversed = [];
  while (stack.peek() != null) {
    reversed.push(stack.pop());
  }
  return reversed;
}

// リストを受け取って単調増加している部分リストを返す関数(難しい)
function consecutiveWalk(arr) {
  let stack = new Stack();
  stack.push(0);
  for (let i = 0; i < arr.length; i++) {
    if (stack.peek() < arr[i]) {
      while (stack.pop() !== null);
    }
    stack.push(arr[i]);
  }
  let result = [];
  while (stack.peek() != null) result.unshift(stack.pop());
  return result;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(consecutiveWalk([2, 3, 1, 4, 2, 1]));
