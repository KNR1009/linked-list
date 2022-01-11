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
}

const t = new DoublyLinkedList([1, 2, 3, 4]);
