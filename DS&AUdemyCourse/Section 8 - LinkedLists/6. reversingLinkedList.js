class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  //initializizing the LinkedList
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  //adding to the end
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode; //connecting current tail to newNode, making the newNode the next node in the linkedList
    this.tail = newNode; //the newNode becomes the tail of the list
    this.length++;
    return this;
  }

  //adding to the beginning
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head; //connect the newNode to the previous head
    this.head = newNode; //the head becomes the new node
    this.length++;
    return this;
  }

  //adding to specific position
  insert(index, value) {
    const newNode = new Node(value);

    //leader -> holdingPointer
    //leader -> newNode -> holdingPointer
    const leader = this.traverseToIndex(index - 1); //the leader is the node before the index we chose
    const holdingPointer = leader.next; //the node after the leader
    leader.next = newNode; //connect the leader to the new node;
    newNode.next = holdingPointer; //connect the newNode to the holdingPointer
    this.length++;
    return this.printList();
  }

  //traversing the linkedList
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head; //beginning at the first node, the head

    //as long as the counter isn't equal to the index
    while (counter !== index) {
      currentNode = currentNode.next; //traversing the linkedList
      counter++;
    }

    return currentNode;
  }

  //deleting
  remove(index) {
    //leader -> unwantedNode -> anotherNode
    const leader = this.traverseToIndex(index - 1); //we get the
    const unwantedNode = leader.next; //the unwantedNode is the node after the leader, we could also say:
    // const unwantedNode = this.traverseToIndex(index);

    leader.next = unwantedNode.next; // we "jump" through the unwantedNode since the leader's next node becomes the node that was next to the unwantedNode
    this.length--;
    return this.printList();
  }

  //showing us the list
  printList() {
    const arr = [];
    let currentNode = this.head; //beginning in the first node
    //traversing the linkedList up to the tail
    while (currentNode !== null) {
      arr.push(currentNode.value); //building the array
      currentNode = currentNode.next; //moving forward
    }

    return arr;
  }

  reverse() {
    //check input
    if (this.length === 1) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next; //third
      second.next = first; //the property is going to point to the first
      first = second; // the first variable, now becomes the second
      second = temp; // the second, becomes the new temp variable
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(4);
myLinkedList.append(2);
myLinkedList.insert(1, 55);
myLinkedList.insert(2, 101);
myLinkedList.reverse();
console.log(myLinkedList.printList());
