// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
const nums = [1, 2, 3, 4];

//Step 1: Clarification
//Step 2: Think outloud
//Step 3: Talk before you write
//Step 4: Test it
//------how could we break the code?
//------how could we improve the code?
//------how could we make it safer?

const runningSum = (arr) => {
  //O(n)
  let myArr = []; //storing the current value in an array
  let currentSum = 0; //sum the current value with the stored ones

  arr.forEach((num, index) => {
    currentSum += num;
    myArr[index] = currentSum;
  });

  return myArr;
};

console.log(runningSum(nums));
