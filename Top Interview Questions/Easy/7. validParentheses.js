// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

var isValid = function (s) {
  //Keep track of opening brackets
  let stack = [];
  //Map each corresponding openParen to its closingParen
  let openParenthesis = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  //Loop through each character in the given string
  for (let i = 0; i < s.length; i++) {
    //Get current character
    let current = s[i];

    //If the current parenthesis is an open one,
    if (openParenthesis[current]) {
      //push it to the stack
      stack.push(current);
      //If the current parenthesis is a close one,
    } else {
      //pop the most recent opening bracket off the stack
      const lastOpenParen = stack.pop();
      //if the current closing brack doesn't match the corresponding opening bracket, return false
      if (openParenthesis[lastOpenParen] !== current) {
        return false;
      }
    }
  }

  //If the stack is empty, all opening brackets have been matched with closing brackets, so the input string is valid
  return stack.length === 0;
};

let s = "()[]{}";
let s1 = "([]{}";

console.log(isValid(s));
console.log(isValid(s1));
