//If you know a solution is not far from the root of the tree:
//BFS - Breath FS because it's great to first the shortest path and it goes WIDE before it goes DEEP

//If the tree is very deep and solutions are rare:
//BFS - Breath FS because DFS would take too long to go to deep
//BFS (DFS will take too long)

//If the tree is very wide:
//DFS - Because it goes DEEP before it goes WIDE, therefore it'd be better than BFS because it'd take to long to cover all the wideness
//DFS (BFS will take too much memory)

//If solutions are frequent but located deep in the tree:
//DFS - Because it goes DEEP before it goes WIDE

//Determining whether a path exists between two nodes:
//DFS - Because it's usually better to check if this path exist

//Finding the shortest path:
//BFS - Because it's better to go WIDE than DEEP to find the shortest path, just like water
