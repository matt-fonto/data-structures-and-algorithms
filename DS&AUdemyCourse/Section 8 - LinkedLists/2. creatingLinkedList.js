// 10 --> 5 --> 16

//Structure
let structureLinkedList = {
  head: {
    value: 10,
    //pointer, reference to the next object
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

//creating a new node Class -- so, with the given value and set its next property to null
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  //creating the very first linkedList node
  constructor() {
    //initializing the head and tail references to null
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //append = adding to the end
  append(value) {
    //creating a new node object with the given value and set its next property to null
    const newNode = {
      value: value,
      next: null,
      //value -> null
    };

    //if the linked list is empty
    if (!this.head) {
      //set the head and tail to be the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      //in case there are elements in the list, we add a new node to the end of the linked list
      //set the next property of the current tail
      this.tail.next = newNode; //it makes the new node the next node in the linked list

      //update the tail reference to the new node
      this.tail = newNode; //tail reference should point to the new node
    }

    this.length++;
    return this;
  }

  //prepend = adding to the beginning
  prepend(value) {
    //creating an empty node with the value and set its next property to the current head
    const newNode = {
      value: value,
      next: this.head,
    };

    //update head reference to the new node
    this.head = newNode;

    //if the linked list was empty, update the tail reference to the new node
    if (!this.tail) {
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.prepend(0);
//0 -> 1 -> 2
console.log(myLinkedList);
