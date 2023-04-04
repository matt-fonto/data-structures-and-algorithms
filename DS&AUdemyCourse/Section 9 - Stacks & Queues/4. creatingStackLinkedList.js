class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //check the top element
  peek() {
    return this.top;
  }

  //add to the top
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top; //holding the reference to what was top
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  //remove from the top
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }
}

const myStack = new Stack();
myStack.push("Matt"); //bottom
myStack.push("Gabi"); //middle
myStack.push("Taise"); //top
// console.log(myStack);

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
