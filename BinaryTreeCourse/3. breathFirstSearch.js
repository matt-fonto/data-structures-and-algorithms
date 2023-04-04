class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breathFirstValues = (root) => {
  if (!root) return [];

  const result = []; //where we will store the result
  const queue = [root]; //where we'll iterate through our tree

  while (queue.length > 0) {
    const current = queue.shift(); //removes the 0th element from the queue
    result.push(current.val); //add the current element to the back of the queue

    if (current.left) queue.push(current.left); //if my current element has a left child, add it to the back of the queue to be visited
    if (current.right) queue.push(current.right); //if my current element has a right child, add it to the back of the queue to be visited
  }

  return result;
};

console.log(breathFirstValues(a));
