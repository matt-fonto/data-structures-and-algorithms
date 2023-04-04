function numIdenticalPairs(nums: number[]): number {
  //map will initially be an empty object with a num key and a value
  let map: { [key: number]: number } = {};
  //where we store the occurences of good pairs
  let goodPairs: number = 0;

  //we loop through our array
  for (let num of nums) {
    //if the have seen this number before
    if (map[num]) {
      //we add the occourences of it to our good pair
      //1, 1 = first occurence 1
      //1, 1 = second occurence
      //1, 1 = third occurence
      //3, 3 = first occurence
      //4 good pairs
      goodPairs += map[num];
      //then, we increase the value in our map
      map[num]++;
    } else {
      //add this as the inital value of the keys
      map[num] = 1;
    }

    console.log(map[num]);
  }

  return goodPairs;
}

let myNums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(myNums));
