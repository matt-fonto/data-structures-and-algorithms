//Merge two sorted arrays into one sorted array
const arrOne = [1, 4, 10];
const arrTwo = [2, 3, 8];

function mergeSortedArrays(arr1, arr2) {
  //check input
  if (!arr1 || !arr2) {
    return "No valid input";
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const mergedArray = [];

  //adding items from arr1 to the mergedArray
  //O(n) -> linear
  arr1.map((item) => {
    mergedArray.push(item);
  });

  //adding items from arr2 to the mergedArray
  //O(n) -> linear
  arr2.map((item) => {
    mergedArray.push(item);
  });

  //sort elements in mergedArray
  return mergedArray.sort((a, b) => a - b);
}

console.log(mergeSortedArrays([], arrTwo));
