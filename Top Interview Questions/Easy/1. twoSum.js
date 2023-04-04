// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2, 7, 11, 15];

/*
Brute force
nums = [2, 7, 11, 15];

i = 0 [2]
j = 1 [7]
2 + 7 = 9 ? Yeah

time complexity: O(n^2) = Nested loop
space complexity: O(1) = Constant 
*/

const twoSumBrute = (arr, target) => {
  const length = arr.length;
  //loop through i 
  for (let i = 0; i < length; i++) {
    //i + 1 = we're not comparing the element to itself, but to its sequence
    //loop through j 
    for (let j = i + 1; j < length; j++) {
      //if the sum of the current element in i and j is equal to target
      if (arr[i] + arr[j] === target) {
        //return their indices
        return [i, j];
      }
    }
  }
};
console.log(twoSumBrute(nums, 9));
//0 = 2
//1 = 7
//2 + 7 = 9

/*
Hash map
nums = [2, 7, 11, 15];
map = {value: index}
map={ 2: 0, 7: 1, 11: 2, 15: 3}
i = 0 / i = 1  / i = 2 / i = 3
value = 2 / v = 7 / v = 11 / v = 15
complement = 9 - 2 = 7


time complexity: O(n) 
space complexity: O(n) 
*/

//Using a hash table O(n)
const twoSumHash = (arr, target) => {
  //a hash table to store the indices a
  const map = {};

  //we loop through the elements
  for (let i = 0; i < arr.length; i++) {
    //we get the element at each index
    const value = arr[i]; //2, 7, 11, 15
    const complement = target - value;
    //9 - 2 = 7 / 9 - 7 = 2 / 9 - 11 = - 2 / 9 - 15 = -6

    //The complement is the value when added to the 'value' results in the target
    //complement + value = target
    //7(complement) + 2(i) = 9

    // have we seen this element before in the hash table?
    if (complement in map) {
      //return the hashtable with the complement and the current index
      return [map[complement], i];
    }

    //add the current element and its index to the hash table
    map[value] = i;
    // map[2: 0, 7: 1, 11: 2, 15: 3]
  }
};
// nums = [2, 7, 11, 15];
console.log(twoSumHash(nums, 9));
