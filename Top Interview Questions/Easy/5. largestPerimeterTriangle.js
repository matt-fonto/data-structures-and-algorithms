/* Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
Example 1:

Input: nums = [2,1,2]
Output: 5
Explanation: You can form a triangle with three side lengths: 1, 2, and 2. */

let nums = [2, 1, 2];

var largestPerimeter = function (nums) {
  //1.Sort the array in descending order
  nums.sort((a, b) => b - a); //Sorting in descending order
  //b - a = descending
  //a - b = ascending

  //2. Iterate through the sorted array to check if there exists a valid triangle
  for (let index = 0; index < nums.length - 2; index++) {
    const a = nums[index]; //2
    const b = nums[index + 1]; //2
    const c = nums[index + 2]; //1
    console.log(a, b, c);

    //3. A valid triangle exists only if the sum of the other two sides is greater than the longest side
    //4. If it's valid, return the perimeter
    //2 < 2 + 1 = valid triangle 
    if (a < b + c) {
      return a + b + c;
    }
  }
  //5. If there's no valid triangle, return 0
  return 0;
};

console.log(largestPerimeter(nums));
