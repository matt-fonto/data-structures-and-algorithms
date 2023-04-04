/* Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".


Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1" */

let address = "1.1.1.1";

var defangIPaddr = function (address) {
  //1. store the defang IP address
  let result = "";

  //loop through the address
  for (let i = 0; i < address.length; i++) {
    //if the current element is a '.'
    if (address[i] === ".") {
      //our return adds [.]
      result += "[.]";
    } else {
      //else, the result is the number being passed
      result += address[i];
    }
  }

  //return the result
  return result;
};

var defangIPaddrTwo = function (address) {
  //1. store the defang IP address
  let result = "";

  //2. transform our string into an array, then map through it and get each element
  address.split("").map((element) => {
    //if the current element is '.', we add [.] to the result, otherwise, we add the number
    element === "." ? (result += "[.]") : (result += element);
  });

  //return the result
  return result;
};

console.log(defangIPaddrTwo(address));
