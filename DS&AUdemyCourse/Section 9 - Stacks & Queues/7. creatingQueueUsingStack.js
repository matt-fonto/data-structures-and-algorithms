class QueueFromStack {
  constructor() {
    this.stack1 = []; //pushes elements to the back of the queue
    this.stack2 = []; //pops elements from the front of the queue
  }

  push(value) {
    //push the element to stack1
    this.stack1.push(value);
  }

  transferStack1ToStack2() {
    //if stack2 is empty, transfer all elements from stack1 to stack 2
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }

  pop() {
    this.transferStack1ToStack2();

    //return the result of popping to the front of the queue (the top element of stack2)
    return this.stack2.pop();
  }

  top() {
    this.transferStack1ToStack2();

    //return to the front of the queue (the last element of stack2)
    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

const myQueue = new QueueFromStack();
