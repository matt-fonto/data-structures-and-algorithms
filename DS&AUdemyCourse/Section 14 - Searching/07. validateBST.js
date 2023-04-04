function isValidBST(root, min, max) {
  //base case: root is null, to stop the recursion
  //it will return true because an empty tree is considered a valid BST
  if (!root) {
    return true;
  }

  //if the root value is less or equal to currentMin
  //OR if the root value is greater or equal to currentMax
  if (root.val <= min || root.val >= max) {
    //we return false, since it'd violate the BST architecture
    return false;
  }

  //Recursively call itself from the left and right subtrees
  return (
    // isValidBST(root, min, max)
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}
