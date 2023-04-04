// Log all pairs
const boxes = ["a", "b", "c", "d", "e"];

function logPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j); //prints the index of the elements
      console.log(arr[i], [j]); //prints the elements in that index
    }
  }
  //nested loops = *
  //O(n^2) = Quadratic time
}

logPairs(boxes);
