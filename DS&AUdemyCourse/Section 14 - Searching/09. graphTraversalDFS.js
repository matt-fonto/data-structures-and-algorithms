function dfsRecursive(graph, stack, visited) {
  //base case: if the stack is empty
  if (!stack.length) return visited;

  //remove the last node from the stack and add it to the variable
  const node = stack.pop();

  //add the node to the visited set
  visited.add(node);

  for (const neighbor of graph[node].reverse()) {
    //if the neighbor hasn't been visited yet
    if (!visited.has(neighbor)) {
      //add it to the stack
      stack.push(neighbor);
    }
  }

  return dfsRecursive(graph, stack, visited);
}

function dfs(graph, start) {
  const visited = new Set();
  const stack = [start]; //create a new stack and add the starting node

  return dfsRecursive(graph, stack, visited);
}

const graph = {
  A: ["B", "C"],
  B: ["A", "C", "D"],
  C: ["A", "B", "D", "E"],
  D: ["B", "C", "E", "F"],
  E: ["C", "D"],
  F: ["D"],
};

const result = dfs(graph, "E");
console.log(result);
