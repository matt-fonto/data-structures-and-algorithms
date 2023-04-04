//Binary search algorithm
function binarySearch(arr, element) {
  // setting the start and end pointers
  let start = 0;
  let end = arr.length - 1;

  // iterate while the start pointer is less than or equal to the end pointer
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    // check if the middle element is equal to the element we're searching for
    if (arr[middle] === element) {
      return element;
      // if the middle element is less than the element we're looking for...
    } else if (arr[middle] < element) {
      // move the start pointer to the right of the middle element
      start = middle + 1;
      //   if the middle element is greater than the element we're searching for...
    } else {
      // move the end pointer to the left of the middle element
      end = middle - 1;
    }
  }
  //   if the element is not found in the array, then
  return -1;
}
