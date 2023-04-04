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

//Breath first search
const treeIncludesBFS = (root, target) => {
  if (!root) return false;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift(); //shift = remove from the front

    if (current.val === target) return true;

    //if there's a left child, add it to the back
    if (current.left) queue.push(current.left); //push = add to the back
    //if there's a right child, add it to the back
    if (current.right) queue.push(current.right);
  }

  return false;
};

let target = "e";

console.log(treeIncludesBFS(a, target));

//Recursive
const treeIncludesRecursive = (root, target) => {
  //if our root is null, return false
  if (!root) return false;

  //if our root is the target, return true
  if (root.val === target) return true;

  //meanwhile, recursively call the function to the left and right branch checking the target
  return (
    treeIncludesRecursive(root.left, target) ||
    treeIncludesRecursive(root.right, target)
  );
};
