const nemoArr = ["nemo"];
const large = new Array(100000).fill("nemo");
const otherArr = ["Brazil", "Germany", "Italy"];

function findNemo(array) {
  let t0 = performance.now(); //when the function initializes
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log(`Running ${i} times`);
      console.log("Found NEMO!");
      break; // we can add this break to make our code a bit more efficient, we leave the loop once we've found what we needed
    } else {
      console.log("NEMO not found");
    }
  }

  let t1 = performance.now(); // //when the function finishes
  console.log(`This function took ${t1 - t0}ms`); // to see how much time the function took
}

findNemo(large); // O(n) -> Linear time
