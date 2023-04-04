//========🎯 Exercise 2
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; //O(1) -> constant
//   a = 50 + 3; //O(1) -> constant

//   //O(n) -> linear
//   for (let i = 0; i < input.length; i++) {
//     anotherFunction(); //O(n) -> linear too because it runs with the loop
//     let stranger = true; //O(n) -> linear too because it runs with the loop
//     a++; //O(n)
//   }
//   return a; //O(1) -> constant
//   //3 (constant)  + [n + n + n + n (linear)] = Big O (3+4n) or simply O(n)
// }

//========🎯 Exercise 2
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; //O(1)
//   let b = 10; //O(1)
//   let c = 50; //O(1)

//   for (let i = 0; i < input; i++) {
//     let x = i + 1; //O(n)
//     let y = i + 2; //O(n)
//     let z = i + 3; //O(n)
//   }

//   for (let j = 0; j < input; j++) {
//     let p = j * 2; //O(n)
//     let q = j * 2; //O(n)
//   }
//   let whoAmI = "I don't know"; //O(1)
//   // Big O = (4 + 5n) || O(n)
// }

//========🎯 Exercise 3: Different terms for input
// function compressBoxesTwice(boxes, boxes2) {
//   boxes.forEach((item) => {
//     console.log(item);
//   });

//   boxes2.forEach((item) => {
//     console.log(item);
//   });
//  sequential loops = +
// }

//========🎯 Exercise 4: Nested Loops
// Log all pairs
const boxes = ["a", "b", "c", "d", "e"];

function logPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j); //prints the index of the elements
      console.log(arr[i], [j]); //prints the elements in that index
    }
  }
  //nested loops = *
  //O(n^2) = Quadratic time
}

logPairs(boxes);
