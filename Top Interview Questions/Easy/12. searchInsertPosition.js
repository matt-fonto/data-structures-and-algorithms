/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
Input: nums = [1,3,5,6], target = 5
Output: 2
*/

var searchInsert = function (nums, target) {
  //1. check if target is in nums -> nums[i] === target ? return i
  //2. if it's not check where it would be -> nums[i] > nums[i+1] ? return i

  //Binary search
  let left = 0;
  let right = nums.length - 1;

  //while left is less than right
  while (left <= right) {
    //calculate the middle of our search
    let middle = Math.floor((left + right) / 2);
    console.log(nums[middle]);

    //if target is equal to the middle element
    if (target === nums[middle]) {
      //return this element
      return middle;
    }

    //if our target is greater than our current middle
    if (target > nums[middle]) {
      //then, we go right
      left = middle + 1;
      console.log(left);
    } else {
      //otherwise, we go left
      right = middle - 1;
    }
  }
  return left;
};

let nums = [1, 3, 5, 6, 8, 9, 10, 12];
let target = 9;

//if my target isn't found:
//is my target > nums[i+1] ?

console.log(searchInsert(nums, target));
