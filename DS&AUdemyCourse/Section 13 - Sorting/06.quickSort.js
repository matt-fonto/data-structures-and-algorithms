const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//mergeSort & quickSort are the most used sorting algorithms
function quickSort(arr) {
  //if there's one element just return the arr
  if (arr.length <= 1) {
    return arr;
  }

  //find a random pivot
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  //create both arrays to store based on the pivot
  const leftArr = [];
  const rightArr = [];

  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    //in case the current element is less than pivot
    if (arr[i] < pivot) {
      //add it to the left
      leftArr.push(arr[i]);
      //in case the current element is greater than the pivot
    } else if (arr[i] > pivot) {
      //add it to the right
      rightArr.push(arr[i]);
    }
  }

  //the first array = result of recursively calling quickSort on the left array
  //the single-element array containing the pivot value
  //the second array = result of recursively calling quickSort on the right array
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(numbers));
