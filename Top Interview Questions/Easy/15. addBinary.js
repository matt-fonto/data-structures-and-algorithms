/* Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100" */

var addBinary = function (a, b) {
  let sum = 0;

  //If it's not such a larget number
  //it's safe to use the built-in 'parseInt'
  if (a.length < 52 && b.length < 52) {
    //convert a and b to decimal numbers with a binary radix -- numberal base
    //parseInt(x, base)
    console.log(parseInt(a, 2));
    sum = parseInt(a, 2) + parseInt(b, 2);
    return sum.toString(2);
    //otherwise, if it's a very large number and parseInt can't handle it
  } else {
    //use the bigInt method
    sum = BigInt("0b" + a) + BigInt("0b" + b);
    return sum.toString(2);
  }
};

let a = "11";
let b = "1";

console.log(addBinary(a, b));
