class Node {
  constructor(data) {
    this.prev = null;
    this.next = null;
    this.data = data;
  }
}

class DoublyLinkedList {
  constructor(arr) {
    this.head = new Node(arr[0]);

    let currentNode = this.head;
    for (let i = 1; i < arr.length; i++) {
      currentNode.next = new Node(arr[i]);
      // 次のノードの前のノードをcurrent Nodeに割り当てます。
      currentNode.next.prev = currentNode;
      currentNode = currentNode.next;
    }
    // 末尾
    this.tail = currentNode;
  }

  printList() {
    let iterator = this.head;
    let str = "";
    while (iterator !== null) {
      str += iterator.data + " ";
      iterator = iterator.next;
    }
    console.log(str);
  }

  // データ検索
  at(index) {
    // クラスで初期化した値
    let iterator = this.head;
    for (let i = 0; i < index; i++) {
      iterator = iterator.next;
      if (iterator === null) return null;
    }
    return iterator;
  }

  // 先頭に追加
  preAppend(newNode) {
    newNode.prev = null;
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  // 末尾に追加
  tailAppend(newNode) {
    newNode.prev = this.tail;
    newNode.next = null;
    this.tail.next = newNode;
  }
  // nodeの次に追加する
  // 具体的なnodeが入ってきているので、O(1)
  addNextNode(node, newNode) {
    newNode.next = node.next;
    newNode.prev = node;
    node.next = newNode;

    // 与えられたノードが末尾の場合
    // if(node = this.tail) {
    //   this.tail = newNode
    // }else{

    // }
  }

  printInReverse() {
    let iterator = this.tail;
    let str = "";
    while (iterator !== null) {
      str += iterator.data + " ";
      iterator = iterator.prev;
    }
    console.log(str);
  }
  reverse() {
    let reverse = this.tail;
    let iterator = this.tail.prev;
    let currentNode = reverse;
    console.log(reverse);

    while (iterator !== null) {
      currentNode.next = iterator;
      iterator = iterator.prev;

      currentNode.next.prev = currentNode;
      currentNode = currentNode.next;
    }
  }
}

const t = new DoublyLinkedList([1, 2, 3, 4, 5]);
