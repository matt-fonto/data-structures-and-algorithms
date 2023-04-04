/* There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1. */

var finalValueAfterOperations = function (operations) {
  //we store the final value of the operations
  let result = 0;

  //we iterate over our array of operations
  for (let i = 0; i < operations.length; i++) {
    //we get the current operation
    let currentOperation = operations[i];

    //if the current operation is one of addition
    if (currentOperation === "++X" || currentOperation === "X++") {
      //we add one to the result
      result += 1;
    } else {
      //otherwise, we subtract
      result -= 1;
    }
  }

  return result;
};

let operations = ["++X", "++X", "X++"];

console.log(finalValueAfterOperations(operations));
