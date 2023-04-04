//     9
//  4    20
// 1 6  15 170
PreOrder = [9, 4, 1, 6, 20, 15, 170]; //from the root to the left
//currentNode -> leftSubtree -> rightSubtree


InOrder = [1, 4, 6, 9, 15, 20, 170]; //everything is in order, we go from down-left to up-right, we print elements in the second time visited
//leftSubtree -> currentNode -> rightSubtree


PostOrder = [1, 6, 4, 15, 170, 20, 9] //we print the elements in the third time visited
//leftSubtree -> rightSubtree -> currentNode