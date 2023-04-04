class Node {
  constructor(value) {
    this.value = value;
    this.left = null; //pointer to the left
    this.right = null; //pointer to the right
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //add items to the tree
  insertNode(value) {
    const newNode = new Node(value);

    //if our binary tree is currently empty
    if (!this.root) {
      //our newNode becomes the root
      this.root = newNode;
    } else {
      //otherwise, a node already exists in the tree
      let currentNode = this.root;

      //loop to traverse the tree and find the correct local for the newNode
      while (true) {
        //if the newNodes value is less than the current node's value, go left
        if (value < currentNode.value) {
          //check if there's no left child
          if (!currentNode.left) {
            //if so, the left pointer of the current node becomes the newNode
            currentNode.left = newNode;
            return this;
          }
          //otherwise, the currentNode becomes its left child
          currentNode = currentNode.left;

          //if the value is greater than the current node's value, go right
        } else {
          //check if there's no right child
          if (!currentNode.right) {
            // if so, the the right pointer of currentNode becomes the newNode
            currentNode.right = newNode;
            return this;
          }
          //otherwise, the currentNode becomes its right child
          currentNode = currentNode.right;
        }
      }
    }
  }

  //if items in our tree
  search(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  //removing a specific value
  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null; //the reference to the parent

    while (currentNode) {
      //if the value is less than the current node, go left
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;

        //if the value is greater than the current node, go right
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;

        //if we have a match
      } else if (currentNode.value === value) {
        // Situation 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // if current value is greater than parent's value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              // if current value is less than parent's value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        }

        // Situation 2: Right child with no left child
        else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            // if current value is greater than parent's value, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              // if current value is less than parent's value, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        }

        // Situation 3: Right child with left child
      }
    }
  }

  //breadth first search
  bfs() {
    let currentNode = this.root;
    const list = []; //our answer, the list which will show the bfs traversing the array
    const queue = []; //the elements to keep track of the level we're at to access the children
    //queue [9] -> add 9 to the list
    //caurrent

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift(); //take the first item in the array
      //root = left / right
      //9    = 4   / 20
      //4    = 1   / 6
      //20   = 15  / 170

      list.push(currentNode.value); //adding the queue element to the list

      //keeping track of the elements to the left
      //left of 9 is 4
      if (currentNode.left) {
        queue.push(currentNode.left); //added 4 to the queue
      }

      //keeping track of the elements to the right
      if (currentNode.right) {
        queue.push(currentNode.right); //added 20 to the queue
      }
    }

    return list;
  }

  bfsRecursive(queue, list) {
    //base case
    //if the queue.length is 0, return the list
    if (!queue.length) return list;

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.bfsRecursive(queue, list);
  }
}

//Let's try to create this tree
//     9
//  4    20
// 1 6  15 170

const tree = new BinarySearchTree();
tree.insertNode(9);
tree.insertNode(4);
tree.insertNode(6);
tree.insertNode(20);
tree.insertNode(170);
tree.insertNode(15);
tree.insertNode(1);
const myBFSList = tree.bfs();
const myRecursiveBFS = tree.bfsRecursive([tree.root], []);

// console.log(myBFSList);
console.log(myRecursiveBFS);
