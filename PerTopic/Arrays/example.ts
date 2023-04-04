function buildArray(nums: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    result.push(nums[current]);
  }

  return result;
}
