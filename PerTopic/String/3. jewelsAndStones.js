/* You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3 */

//Brute force: nested loop
//O(n^2) = quadratic //
var numJewelsInStones = function (jewels, stones) {
  //store the result
  let result = 0;

  //loop through the outer loop - stones
  for (let i = 0; i < stones.length; i++) {
    //loop through the inner loop - jewels
    for (let j = 0; j < jewels.length; j++) {
      //if jewels is the same as stone, then add to the result
      if (jewels[j] === stones[i]) result += 1;
    }
  }

  return result;
};

let jewels = "aA";
let stones = "aAAbbbb";

console.log(numJewelsInStones(jewels, stones));

var numJewelsInStonesTwo = function (jewels, stones) {
  //store the result
  let result = 0;

  //loop through the outer loop - stones
  for (let i = 0; i < stones.length; i++) {
    //if in the jewels array, we have an equal element to stones
    if (jewels.includes(stones[i])) {
      //add to the result
      result += 1;
    }
  }

  return result;
};

console.log(numJewelsInStonesTwo(jewels, stones));
