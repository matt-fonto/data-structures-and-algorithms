class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //the first item in our queue
  peek() {
    return this.first;
  }

  //add to the queue
  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //if the queue isn't empty, add the new node to the end of the queue
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  //remove from the queue
  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const temp = this.first; //saving the value to memory
    const nextInLine = this.first.next; //getting the next item 1 - 2 (nextInLine) - 3
    this.first = nextInLine; //the first value becomes the next in line  2 - 3
    this.length--;
    return temp;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Matt");
myQueue.enqueue("Gabi");
myQueue.enqueue("Taise");
myQueue.enqueue("Mylene");
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
// console.log(myQueue.dequeue());
console.log(myQueue);

//Queue
//1. Matt
//2. Gab
//3. Taise
