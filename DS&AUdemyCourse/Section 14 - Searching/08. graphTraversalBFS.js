function bfsRecursive(graph, queue, visited) {
  //base case: queue is empty
  if (!queue.length) return visited;

  //remove the first node from the queue and add it to the variable
  const node = queue.shift(); //BFS uses QUEUE, while DFS uses a STACK!

  //add the node to the visited set
  visited.add(node);

  //add the node's neighbors to the end of the queue
  //neighbor = holds the value of the current neighbor being processed
  //graph = our graph structure
  //node = the current node being visited
  for (const neighbor of graph[node]) {
    //if the neighbor hasn't been visited yet
    if (!visited.has(neighbor)) {
      //add it to the queue
      queue.push(neighbor);
    }
  }

  //recursive case: call bfsRecursive with the updated queue and visited object
  return bfsRecursive(graph, queue, visited);
}

function bfs(graph, start) {
  const visited = new Set(); //to store visited nodes
  const queue = [start]; //create a new queue and add the starting node

  return bfsRecursive(graph, queue, visited);
}

const graph = {
  A: ["B", "C"],
  B: ["A", "C", "D"],
  C: ["A", "B", "D", "E"],
  D: ["B", "C", "E", "F"],
  E: ["C", "D"],
  F: ["D"],
};

const result = bfs(graph, "E");
console.log(result);