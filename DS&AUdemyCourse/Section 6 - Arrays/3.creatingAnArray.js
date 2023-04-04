//Arrays = objects with integer-based keys that work as indexes
const a = ["lemon", "apple", "orange"];

//Both are the same
const b = {
  0: "lemon",
  1: "apple",
  2: "orange",
};

console.log(a);
console.log(b);

//creating an Array from scratch
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item; //add the items to the end
    this.length++; //increase the indexes
    return this.length; //return the new length
  }

  pop() {
    const lastItem = this.data[this.length - 1]; //get the last item
    delete this.data[this.length - 1]; //delete the last item
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  // single responsibility
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray({});
newArray.push("hi");
newArray.push("there");
newArray.push("!");
newArray.delete(1);
console.log(newArray);
