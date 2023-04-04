const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//useful for almost sorted lists
//good for small data sets
function insertionSort(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    //store the element at index i in the key
    let key = array[i];
    //j is equal to i - 1;
    let j = i - 1;

    //as long as j is greater than or equal to 0 and the current element is greater than the key -- element in index i
    while (j >= 0 && array[j] > key) {
      //move the current element to the right;
      array[j + 1] = array[j];
      //decrement j
      j = j - 1;
    }

    //assign the key value to the next position after the element at index j 
    array[j + 1] = key;
  }
  return array;
}

insertionSort(numbers);
console.log(numbers);
