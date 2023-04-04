const nemoArr = ["nemo"];
const large = new Array(100000).fill("nemo");
const otherArr = ["Brazil", "Germany", "Italy"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    } else {
      console.log("NEMO not found");
    }
  }
}

findNemo(large); // O(n) -> linear time
//time grows and the number of operations grow
//the most common bigO notation
