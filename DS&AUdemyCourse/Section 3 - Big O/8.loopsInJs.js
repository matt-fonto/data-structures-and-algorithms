const nemoArr = ["nemo"];
const large = new Array(100).fill("nemo");
const otherArr = ["Brazil", "Germany", "Italy"];

//for loop
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

//forEach
function findNemo2(array) {
  array.forEach((fish) => {
    if (fish === "nemo") {
      console.log("Found NEMO!");
    }
  });
}

//for of
function findNemo3(array) {
  for (let fish of array) {
    if (fish === "nemo") {
      console.log("Found NEMO!");
    }
  }
}
