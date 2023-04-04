// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
let nums = [1, 2, 3, 1];

//Solution: Recursion + Memo
function houseRobber(nums) {
  //where we'll store the result of the subproblems that are solved during the recursive calls
  const memo = {};

  function robHelper(i) {
    //if there are no more houses
    if (i >= nums.length) {
      //return 0. since there is no money to be gained
      return 0;
    }

    //check if the result of the subproblem for the given index has been solved and stored
    if (memo[i] !== undefined) {
      //if so, get the result back, avoiding to solve the sobproblem again
      return memo[i];
    }

    //robcurrent = moneyCurrentHouse + moneyTwoHouses
    const robCurrent = nums[i] + robHelper(i + 2);

    //
    const skipCurrent = robHelper(i + 1);
    const result = Math.max(robCurrent, skipCurrent);
    memo[i] = result;
    return result;
  }

  return robHelper(0);
}

console.log(houseRobber(nums));
