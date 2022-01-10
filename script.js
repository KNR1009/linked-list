class Node {
  // 前後を追跡します。
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// リストは少なくとも1つのノードを持っている必要があります。
// ヌルリストをサポートしたい場合は、それに応じてコードを追加してください。
class DoublyLinkedList {
  constructor(arr) {
    // 今回は末尾を追跡します。
    if (arr.length <= 0) {
      this.head = new Node(null);
      this.tail = this.head;
      return;
    }

    this.head = new Node(arr[0]);
    let currentNode = this.head;
    for (let i = 1; i < arr.length; i++) {
      currentNode.next = new Node(arr[i]);
      // 次のノードの前のノードをcurrent Nodeに割り当てます。
      currentNode.next.prev = currentNode;
      currentNode = currentNode.next;
    }

    // このcurrent Nodeは最後のnodeです。
    this.tail = currentNode;
  }

  printList() {
    let iterator = this.head;
    let str = "";
    while (iterator != null) {
      str += iterator.data + " ";
      iterator = iterator.next;
    }
    console.log(str);
  }

  at(index) {
    let iterator = this.head;
    for (let i = 0; i < index; i++) {
      iterator = iterator.next;
      if (iterator === null) return null;
    }
    return iterator;
  }

  // 反対から出力する
  printInReserve() {
    let iterator = this.tail;
    let str = "";
    while (iterator !== null) {
      str += iterator.data + " ";
      iterator = iterator.prev;
    }
    return str;
  }
}

let numList = new DoublyLinkedList([
  35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555,
]);

console.log(numList.printInReserve());
