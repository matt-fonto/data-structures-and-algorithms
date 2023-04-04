/* Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1] */

var getConcatenation = function (nums) {
  //where we store the concatenation
  let ans = [];

  //we loop through the nums array and push the values once
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
    //1, 2, 1
  }

  //we loop again and add the same values the second time
  for (let j = 0; j < nums.length; j++) {
    ans.push(nums[j]);
    //1, 2, 1
  }

  //loop 1: ans[1,2,1]
  //loop 2: ans[1,2,1,1,2,1]
  return ans;
};
