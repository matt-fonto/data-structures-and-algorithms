/* Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2. */

var mySqrt = function (x) {
  // [0, 1, 2, 3, 4, 5, 6, 7]
  //left = 0
  //right = 7
  let left = 0;
  let right = x;
  let result = 0;

  //while our pointers don't crossout
  while (left <= right) {
    //divide our array in 2
    let middle = Math.floor((left + right) / 2); //rounding up to have a whole int
    // middle: elements = 3, 1, 2 / index = 4, 1, 2

    //if the middle value to the power of two is greater than 7
    //3 ** 2 = 9 > 7
    //1 ** 2 = 1 > 7
    //2 ** 2 = 4 > 7
    if (middle ** 2 > x) {
      //our right pointer becomes middle - 1
      //3 (middle) - 1 = 2
      right = middle - 1;
      //if our middle value to the power of two is less than 7
    } else if (middle ** 2 < x) {
      //our left pointer becomes middle + 1
      left = middle + 1;
      //our result becomes the middle because we want a whole integer
      result = middle;
    } else {
      return middle;
    }
  }

  return result;
};

let x = 7;
console.log(mySqrt(x));
