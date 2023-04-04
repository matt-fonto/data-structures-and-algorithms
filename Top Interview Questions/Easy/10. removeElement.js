/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores). */

var removeElement = function (nums, val) {
  //where we store every element that isn't equal to our val
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    //get the current element
    let current = nums[i];
    //holds the variable that is not equal to val
    let nonValElement = nums[k];
    console.log(k); //0, 0, 1, 2
    //loop 1:
    //current = nums[0] = 3 // current == val, we don't update nums[k]
    //nonValElement = 0

    //loop 2:
    //current = nums[1] = 2 // current =! val, we update nums[k] with current, which means nums[0]
    //nums[2]
    //nonValElement = 1

    //loop 3:
    //current = nums[2] = 2 // current =! val, we update nums[k] with current, which means nums[1]
    //nums[2, 2]
    //nonValElement = 2

    //loop 4:
    //current = nums[3] = 3 // current == val, we don't update nums[k] with current
    //nums[2, 2]
    //nonValElement = 2

    //if the current element is not equal to our value
    if (current !== val) {
      //replace the element at index k with the current element
      nonValElement = current;
      //increase k to move to the next index to be replaced
      k++;
    }
  }

  return k;
};

let nums = [3, 2, 2, 3];
let val = 3;

console.log(removeElement(nums, val));
