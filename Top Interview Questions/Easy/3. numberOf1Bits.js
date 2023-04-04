var hammingWeight = function (n) {
  //Step 1: n.toString(2) = converts the input n to a binary string 2. 2 is used to return the binary representation
  //Step 2: .split('0') = removing the 0, and returning just 1
  //Step 3: .join(') = concatenate the string back again
  //Step 4: .length = get the number of 1 bits in the representation
  return n.toString(2).split("0").join("").length;
};

let n = 00000000000000000000000000001011;

console.log(hammingWeight(n));
