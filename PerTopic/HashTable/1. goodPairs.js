/* Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
They are a good pair if they are equal and have different indexes

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed. */

//Brute Force
var numIdenticalPairsBrute = function (nums) {
  //store the count of good pairs
  let goodPairs = 0;

  //loop through the outer array
  for (let i = 0; i < nums.length; i++) {
    //check the elements against each other to verify a good pair
    for (let j = i + 1; j < nums.length; j++) {
      //if we have the same elements in different indexes, add to the count
      if (nums[i] === nums[j]) goodPairs++;
    }
  }

  return goodPairs;
};

//Hash Table
var numIdenticalPairsEfficient = function (nums) {
  let map = {};
  let goodPairs = 0;

  //loop through the array and get each element
  for (const num of nums) {
    console.log(map);
    //map = object
    //num = key
    //map[num] = shorhand way of checking if the property num exists in the map object
    //if we have seen this number before,
    if (map[num]) {
      //increment goodPairs by the current frequency of the number
      goodPairs += map[num];
      //then we increment the frequency of the number in the map object by one
      map[num]++;
      //if we haven't seen this number before
    } else {
      //map{element:value}
      //this is where we add elements to the map object
      map[num] = 1;
    }
  }

  return goodPairs;
};

let nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairsBrute(nums));
console.log(numIdenticalPairsEfficient(nums));
