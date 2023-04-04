//what is the space complexity of this function?
function booo(n) {
  //i = stored in the stack
  for (let i = 0; i < n.length; i++) {
    console.log("boo!");
  }
}

booo([1, 2, 3, 4]); //O(1) = the amount of memory used by the function doesn't depend on the size of the input array 'n'

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi"; //our i variable depends linearly on the size of the input
  }
  return hiArray;
}

console.log(arrayOfHiNTimes(6)); //O(n)
