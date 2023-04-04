class Queue {
  constructor() {
    this.items = [];
  }

  enqueueu(element) {
    this.items.push(element);
  }

  dequeue() {
    if (!this.items) {
      return false;
    }

    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  printQueue() {
    console.log(this.items.toString());
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  search(element) {
    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index] === element) return index;
    }
  }
}

const myQueue = new Queue();
myQueue.enqueueu(5);
myQueue.enqueueu(10);
myQueue.enqueueu(15);
console.log(myQueue.search(10));
myQueue.dequeue(); //removed the 5
console.log(myQueue);
