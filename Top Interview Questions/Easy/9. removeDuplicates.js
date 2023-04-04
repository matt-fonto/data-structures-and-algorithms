/* Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
Custom Judge:

The judge will test your solution with the following code:
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation
assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted. */

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

let nums = [5, 6, 5, 3, 4, 5];

var removeDuplicates = function (nums) {
  //Begin the index of the first unique element
  //begin with 1 because index 0 will always be unique
  let k = 0;

  for (let i = 1; i < nums.length; i++) {
    //two pointers approach
    let current = nums[i];
    let next = nums[i + 1];
    let uniqueElement = nums[k];

    //if our current element isn't equal to the next element
    if (current !== next) {
      //copy next element to the next position after unique element
      uniqueElement = next;
      //increment the index variable to move to the next unique element position
      k++;
    }
  }

  //return the quantity of unique element
  return k;
};

console.log(removeDuplicates(nums));
