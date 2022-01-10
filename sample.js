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
  at(index) {
    let iterator = this.head;
    // 与えられたindexまでのループをする
    // nullの場合は末端なので範囲外

    for (let i = 1; i < index; i++) {
      iterator = iterator.next;
      if (iterator.next === null) return null;
    }
    return iterator;
  }
  // ノードデータを出力
  printList() {
    let iterator = this.head;
    let str = "";
    while (iterator !== null) {
      str += iterator.data + " ";
      iterator = iterator.next;
    }
    console.log(str);
  }
}

const numList = new SinglyLinkedList([
  35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555,
]);
numList.printList();

// indexの2と3の間に40を挿入する
let thirdEle = numList.at(2);
let tempNode = thirdEle.next;
let newNode = new Node(40);
thirdEle.next = newNode;
newNode.next = tempNode;

numList.printList();
