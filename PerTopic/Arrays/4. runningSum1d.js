/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]. */

const runningSum = (arr) => {
  let currentSum = 0; //sum the current value with the stored ones

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    currentSum += arr[i];
    arr[i] = currentSum;
  }

  return arr;
};
