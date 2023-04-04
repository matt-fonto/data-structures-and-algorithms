class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);

    //if it's empty
    if (!this.head) {
      //make the head and end the newNode;
      this.head = newNode;

      //otherwise
    } else {
      //the variable that will traverse the list
      let current = this.head;

      //while there are nodex, the loop will be running
      while (current.next) {
        //updates the current value to be the next node in the list
        //which allows us to move from node to node
        current = current.next;
      }

      //we add the newNode to the end of the list
      current.next = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return false;
    }

    //if the value is the head
    if (this.head.value === value) {
      //link the head to the next value
      this.head = this.head.next;
      return;
    }

    let prev = this.head;
    let current = this.head.next;

    //while there elements
    while (current) {
      //if the value of our current node is the same as the value we want to delete
      if (current.value === value) {
        //we jump -- delete -- the current node
        prev.next = current.next;
        return;
      }
      //the previous node becomes the current
      prev = current;
      //the current becomes the next
      current = current.next;
    }
  }

  printList() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.insert(10);
myLinkedList.insert(2);
myLinkedList.insert(66);
myLinkedList.insert(70);
myLinkedList.insert(90);
myLinkedList.delete(2);
console.log(myLinkedList.printList());
