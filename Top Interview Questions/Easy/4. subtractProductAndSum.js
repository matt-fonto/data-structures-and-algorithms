/* Given an integer number n, return the difference between the product of its digits and the sum of its digits.
Example 1:
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15 */

let n = 234;
var subtractProductAndSum = function (n) {
  //1. Take the numbers, transform them to string, so we can split them. Each string digit is converted back to number with .map(Number);
  let digits = n.toString().split("").map(Number);

  //2. Calculate the product with reduce by multiplying each value to the accumulator a.
  //a: accumulator
  //b: currentValue
  let product = digits.reduce((a, b) => a * b);

  //3. Calculate the sum with the reduce by adding the values to the accumulator
  let sum = digits.reduce((a, b) => a + b);

  return product - sum;
};

console.log(subtractProductAndSum(n));
