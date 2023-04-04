/* Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2). */

// 8 - 1 - 2 - 2 - 3
//First value
// i = 8 -> 8 vs 1 -> 8 vs 2 -> 8 vs 2 -> 8 vs. 3
// smallerThan = 4

let arr = [8, 1, 2, 2, 3];

function smallerNumbersThanCurrentBrute(nums: number[]): number[] {
  //where we store the result
  let result: number[] = [];

  //we loop through the array
  for (let i = 0; i < nums.length; i++) {
    let current: number = nums[i];
    let count: number = 0;

    for (let j = 0; j < nums.length; j++) {
      let next = nums[j];

      if (current > next) {
        //increase my count
        count++;
      }
    }
    //at the end of each iteration, push the count result to the array
    result.push(count);
  }

  return result;
}

console.log(smallerNumbersThanCurrentBrute(arr));

/* function smallerNumbersThanCurrent(nums: number[]): number[] {
  let map: { [key: number]: number } = {};
  let smaller: number[] = [];
  let count: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
      console.log(count);
    }
  }
} */

console.log(smallerNumbersThanCurrentBrute(arr));
