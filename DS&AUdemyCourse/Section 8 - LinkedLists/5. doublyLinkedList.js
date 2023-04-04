class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail; //connecting the previous node
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const connectingNode = unwantedNode.next;

    leader.next = connectingNode;
    connectingNode.prev = leader;
    this.length--;
    return this.printList();
  }

  search(value) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode.value !== value) {
      index++;
      currentNode = currentNode.next;

      if (currentNode == null) {
        return "NOT FOUND";
      }
    }

    return index;
  }
}

const myDoublyLinkedList = new doublyLinkedList(2);
myDoublyLinkedList.append(4);
myDoublyLinkedList.append(10);
myDoublyLinkedList.append(66);
myDoublyLinkedList.remove(2);
console.log(myDoublyLinkedList.printList());
// myDoublyLinkedList.append(20);
// // console.log(myDoublyLinkedList.search(20));
// console.log(myDoublyLinkedList.traverseForward(2));
