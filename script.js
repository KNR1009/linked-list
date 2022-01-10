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
}
// class SinglyLinkedList {
//   constructor(node) {
//     // 初期値
//     this.head = node;
//   }
// }

// let arr = [35, 23, 546, 67, 86, 234, 56, 767, 34, 1, 98, 78, 555];
// let node1 = new Node(arr[0]);
// let node2 = new Node(arr[1]);
// let numList = new SinglyLinkedList(node1);

// let currentNode = numList.head;
// for (let i = 1; i < arr.length; i++) {
//   currentNode.next = new Node(arr[i]);
//   currentNode = currentNode.next;
// }

// console.log(numList);
