var maxPathSum = function (root) {
  let maxSum = -Infinity;

  const maxPathSumHelper = function (node) {
    if (!node) return 0;

    const leftSum = Math.max(maxPathSumHelper(node.left), 0);
    const rightSum = Math.max(maxPathSumHelper(node.right), 0);
    const sum = node.val + leftSum + rightSum;

    maxSum = Math.max(maxSum, sum);

    return node.val + Math.max(leftSum, rightSum);
  };

  maxPathSumHelper(root);

  return maxSum;
};
