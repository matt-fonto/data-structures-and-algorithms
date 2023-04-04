/* Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

Example 1:

Input: tree = [7,4,3,null,null,6,19], target = 3
Output: 3
Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree. */

//Iterative
var getTargetCopy = function (original, cloned, target) {
  //store the nodes of the original and cloned trees
  let queue = [original];
  let clonedQueue = [cloned];

  //while there are elements in the original
  while (queue.length) {
    //get the length of the queue
    let length = queue.length;

    //loop through the elements
    for (let i = 0; i < length; i++) {
      //get the first element from the original and cloned
      let node = queue.shift();
      let cloneNode = clonedQueue.shift();

      //if our node is equal to the target
      if (node === target) {
        //return the clone node;
        return cloneNode;
      }

      //if there are left children elements
      if (node.left) {
        //add them to the original and cloned queues
        queue.push(node.left);
        clonedQueue.push(cloneNode.left);
      }

      //if there are right children elements
      if (node.right) {
        //add them to the original and cloned queues
        queue.push(node.right);
        clonedQueue.push(cloneNode.right);
      }
    }
  }
};

let tree = [7, 4, 3, null, null, 6, 19];
let target = 3;

//Recursive
var getTargetCopyRecursive = function (original, cloned, target) {
  //Base case 1: if there's no original node, return null;
  if (!original) return null;

  //Base case 2: If we found the target, return the cloned
  if (original === target) return cloned;

  return (
    getTargetCopyRecursive(original.left, cloned.left, target) ||
    getTargetCopyRecursive(original.right, cloned.right, target)
  );
};
