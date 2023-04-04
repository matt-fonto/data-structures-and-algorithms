/* You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
Return the shuffled string.
Example 1:
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling. */

var restoreString = function (s, indices) {
  //where we restore the string
  let result = [];

  for (let i = 0; i < s.length; i++) {
    //get the current string element
    let stringElement = s[i];
    //get where it should be
    let correctPosition = indices[i];

    //add the string element to the correct position
    result[correctPosition] = stringElement;
  }

  return result.join("");
};

let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];

console.log(restoreString(s, indices));
