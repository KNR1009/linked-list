class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(arr) {
    this.head = new Node(arr[0]);
    let currentNode = this.head;
    for (let i = 1; i < arr.length; i++) {
      currentNode.next = new Node(arr[i]);
      currentNode = currentNode.next;
    }
  }

  // 先頭に受け取ったノードを追加する
  preAppend(newNode) {
    newNode.next = this.head;
    this.head = newNode;
  }

  // ノードの参照
  at(index) {
    let iterator = this.head;

    // indexまでループ
    for (let i = 0; i < index; i++) {
      iterator = iterator.next;
      if (iterator === null) return null;
    }
    return iterator;
  }
  printList() {
    let iterator = this.head;
    let str = "";

    // ポイントがnullになるまでループ
    while (iterator !== null) {
      str += iterator.data + " ";
      iterator = iterator.next;
    }
    return str;
  }
}

let numList = new SinglyLinkedList([1, 2, 3, 6, 8, 10]);
console.log(numList.printList());

numList.preAppend(new Node(20));

console.log(numList.printList());

// 2と3番目の間に40を挿入する
let thirdEl = numList.at(2);
// 2番目以降の連結リストを保存
let tempNode = thirdEl.next;
// 追加するノードをインスタンス化
let newNode = new Node(40);
newNode.next = tempNode;
thirdEl.next = newNode;
