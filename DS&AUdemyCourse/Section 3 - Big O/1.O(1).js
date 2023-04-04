//access element by index
function getElement(arr, index) {
  return arr[index];
}

const boxes = [1, 2, 3, 4, 5];

function compressFirstBox(boxes) {
  console.log(boxes[0]);
} //O(1) 👉 constant time
// doesn't matter the quantity of elements, we're always grabbing the same position

function compressFirstTwoBoxes(boxes) {
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(2)
}

compressFirstTwoBoxes(boxes); //O(2) => two operations, yet continues linear, constant time
