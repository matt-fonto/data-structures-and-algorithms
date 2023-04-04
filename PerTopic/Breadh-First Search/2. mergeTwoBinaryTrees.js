/* You are given two binary trees root1 and root2.
Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
Return the merged tree.
Note: The merging process must start from the root nodes of both trees.
Example 1:
Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7] */

//Recursive
var mergeTreesRecursive = function (root1, root2) {
  //base cases
  if (!root1) return root2;
  if (!root2) return root1;

  //we create a new node tree by combining the two trees
  const mergedNode = new TreeNode(root1.val + root2.val);
  //we recursively call it to the left
  mergedNode.left = mergeTrees(root1.left, root2.left);
  //and the right
  mergedNode.right = mergeTrees(root1.right, root2.right);

  //we return the result of the merged trees
  return mergedNode;
};

let root1 = [1, 3, 2, 5];
let root2 = [2, 1, 3, null, 4, null, 7];
console.log(mergeTrees);

//Iteratively BFS
var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  const queue = [[root1, root2]];

  while (queue.length) {
    const [node1, node2] = queue.shift();

    node1.val += node2.val;

    //Checking the left
    //If there are elements in the nodeOne and Two
    if (node1.left && node2.left) {
      //Push them to the queue
      queue.push([node1.left, node2.left]);
    } else if (!nodeOne.left) {
      node1.left = node2.left;
    }

    //Checking the right
    //If there are elements in the nodeOne and Two
    if (node1.right && node2.right) {
      //Push them to the queue
      queue.push([node1.right, node2.right]);
    } else if (!nodeOne.right) {
      node1.right = node2.right;
    }
  }

  return node1;
};
