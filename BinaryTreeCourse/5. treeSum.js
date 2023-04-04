//Recursive
const treeSumRecursive = (root) => {
  //the simplest case
  if (!root) return 0;

  //Return the value of the root + the recursive calls both to and right
  return root.val + treeSum(root.left) + treeSum(root.right);
};

//Iterative BFS
const treeSumBFS = (root) => {
  if (!root) return 0;

  let queue = [root];
  let totalSum = 0;

  while (queue.length) {
    let current = queue.shift(); //removes the front elelment

    //total sum is the accumulation of all values
    totalSum += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return totalSum;
};
