class Stack {
  constructor() {
    this.array = [];
  }

  //seeing the top -- the latest thing we added
  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    return this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }
}

const myStack = new Stack();
myStack.push("Matt"); //bottom
myStack.push("Gabi"); //middle
myStack.push("Taise"); //top
console.log(myStack.peek());
console.log(myStack.pop());
// console.log(myStack.pop());
console.log(myStack);
