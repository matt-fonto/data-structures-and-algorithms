/* Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. 

----
Pseudocode:
1. clean the string
2. get the last word and get its length 
*/

var lengthOfLastWord = function (s) {
  //keep track of the length of the last word
  let length = 0;

  //begin the for loops by the end
  for (let i = s.length - 1; i >= 0; i--) {
    //if the characters aren't empty spaces
    if (s[i] !== " ") {
      //increase the length
      length++;
    }
    //if a space is encountered and the length of the variable isn't 0, we found the last word
    else if (length > 0) {
      //leave the loop
      break;
    }
  }

  //return the length of the last word
  return length;
};

let s = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(s));
