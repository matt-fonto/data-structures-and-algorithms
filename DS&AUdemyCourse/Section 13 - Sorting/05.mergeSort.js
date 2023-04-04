const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(unsortedArray) {
  //There's no need to split/merge if there's only one element
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  //Divide the array in half
  //Math.floor = to avoid decimals
  const mid = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, mid);
  const right = unsortedArray.slice(mid);
  // console.log("left: " + left);
  // console.log("right: " + right);

  //Merge the two arrays
  return mergeArrays(mergeSort(left), mergeSort(right));
}

function mergeArrays(leftArr, rightArr) {
  //Where we push the values into from oth arrays
  let result = [];

  //Where we keep track of the of the position of right and left arrays
  let leftIndex = 0;
  let rightIndex = 0;

  //as long as there are numbers from the array unadded
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    //in case the element in the leftIndex of the leftArray is less than the element in the right index of the rightArray
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      //push -- add to the end -- the element in the leftIndex of the leftArray to the result array
      result.push(leftArr[leftIndex]);
      console.log(result);
      leftIndex++; // increase the count in the leftIndex
    } else {
      //otherwise
      ///push -- add to the end -- the element in the rightIndex of the rightArray to the result array
      result.push(rightArr[rightIndex]);
      rightIndex++; // increase the count in the rightIndex
    }
  }

  // console.log(leftArr, rightArr);

  return [
    ...result,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
}

mergeSort(numbers);
