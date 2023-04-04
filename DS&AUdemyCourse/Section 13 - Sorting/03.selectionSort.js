const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;

  //i = index
  //array[i] = elementAtIndex
  //iterating over the array
  for (let i = 0; i < length; i++) {
    //keep track of the index of the minimum value found so far
    let minIndex = i;
    let temp = array[i];

    //j = i + 1 = nextIndex after the current index
    //j = i + 1 = avood comparing the current element with itself;
    for (let j = i + 1; j < length; j++) {
      //if the current j element is bigger than the element at minIndex
      if (array[j] < array[minIndex]) {
        //make minIndex be j, meaning set the index of the minimum element;
        minIndex = j;
      }
    }

    //assign the value of the element at minIndex to the element at index i
    array[i] = array[minIndex];
    //assign the temp value to the element at the new minimum index
    array[minIndex] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
