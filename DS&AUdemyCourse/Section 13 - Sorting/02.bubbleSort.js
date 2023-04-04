const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  // get the length of the array
  const n = array.length;

  //iterate over the array n times
  for (let i = 0; i < n; i++) {
    //iterate over the array up to n - i - 1
    // n - i - 1 = avoid iterating over elements that have been sorted
    for (let j = 0; j < n - i - 1; j++) {
      let currentElement = array[j];
      let nextElement = array[j + 1];
      //is currentElement > nextElement?
      if (currentElement > nextElement) {
        //if yes, swap the positions of the elements
        array[j] = nextElement;
        array[j + 1] = currentElement;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
