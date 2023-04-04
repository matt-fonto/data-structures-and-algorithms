// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

const arrayOne = ["a", "b", "c", "d"];
const arrayTwo = ["x", "y", "e"];

//Step 1: Clarification
//can the values be negative? No
//will the values always be integers?
//will the params always be array? Yes
//will they always be in lowercase? No
//do we know before hand the length? No
//how large can it get? It can get big - So, we need to be pay attention to the Big O notation, otherwise, we wouldn't, so a nested loop would be fine
//what is our goal here? Time complexity or space complexity?

//Step 2: Think loud
// 2 params = 2 arrays
// return true or false
// brute force = nested loops O(n^2), but it's quadratic, which isn't very scalable == We don't need to code it, just explain. It shows critial thinking
// better solution = one loop O(n)

//Step 3: Talk before you write
//Method 1: O(n)
const checkCommonItems = (arr1, arr2) => {
  let isCommon = false; //we keep track of the result of our forEach loop

  //O(n) linear because we have a loop
  arr1.forEach((itemOne) => {
    if (arr2.includes(itemOne)) {
      isCommon = true;
    }
  });
  return isCommon;
};

// console.log(checkCommonItems(arrayOne, arrayTwo)); //O(n) -> Linear/One loop

//Method 2: Using Hash Tables O(a+b) -> it will perform better than the first one because it's O(a+b)
const checkCommonItemsTwo = (arr1, arr2) => {
  let storingObject = {};
  let isCommon = false;

  //loop through first array and create properties equal to arr1 items
  arr1.map((itemOne) => {
    storingObject[itemOne] = true;
  });

  //loop through second array and check if item in second array matches the created object
  arr2.forEach((itemTwo) => {
    if (storingObject[itemTwo]) {
      return (isCommon = true);
    }
  });
  return isCommon;
};

//Step 4: Test
console.log(checkCommonItemsTwo(arrayOne, arrayTwo)); //O(a+b)
