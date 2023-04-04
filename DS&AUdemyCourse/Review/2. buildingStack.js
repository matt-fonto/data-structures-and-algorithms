class Stack {
  constructor() {
    this.items = [];
  }

  insert(value) {
    //push = add to the top/end
    this.items.push(value);
  }

  delete() {
    if (!this.items) {
      return false;
    }

    //we return the of of the removed element
    //pop = removes from the top/end
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  printStack() {
    console.log(this.items.toString());
  }

  search(value) {
    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index] === value) return items;
    }

    return false;
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const myStack = new Stack();
myStack.insert(5);
myStack.insert(10);
myStack.insert(15);
myStack.delete(); //removed 15
// console.log(myStack.getSize());
// console.log(myStack.peek());
console.log(myStack.search(10));
myStack.printStack();
