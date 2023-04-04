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

const depthFirstValues = (root) => {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);

    //If there are children nodes
    //push the right node to our stack
    if (current.right) stack.push(current.right);
    //push the left node to our stack
    if (current.left) stack.push(current.left);
  }

  return result;
};

console.log(depthFirstValues(a));

const depthFirstValuesRecursively = (root) => {
  if (root === null) return [];

  const leftValues = depthFirstValuesRecursively(root.left); //[b, d, e]
  const rightValues = depthFirstValuesRecursively(root.right); //[c,f]

  //We return the root, plus the recursive call from left and right using the spreadOperator
  return [root.val, ...leftValues, ...rightValues];
};

console.log(depthFirstValuesRecursively(a));

// Spread operator
const countries = ["Brazil", "Netherlands", "Canada", "Italy", "Germany"];
const country = [...countries];
console.log(country);
