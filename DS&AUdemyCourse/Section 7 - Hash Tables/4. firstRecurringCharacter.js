//Find the recurring item in the arrays given. If there's no recurring item, it should return undefined
const arr1 = [2, 5, 6, 2];
const arr2 = [2, 1, 1, 5];
const arr3 = [1, 3, 4, 5];

//Time complexity: O(n^2)
//Space complexity: O(1)
function bruteForceFindRepeatedItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }

  return undefined;
}

console.log(bruteForceFindRepeatedItem(arr1));
console.log(bruteForceFindRepeatedItem(arr2));
console.log(bruteForceFindRepeatedItem(arr3));

//Time complexity: O(n) = Hash tables are great to improve time complexity
//Space complexity: O(n) = because of the map, which adds items to the memory each loop
//Trade-off: hash tables better time complexity, but more memory consuming
function moreEfficientFindRepeatedItem(arr) {
  let map = {}; //where we'll store the keys

  for (let i = 0; i < arr.length; i++) {
    //if the value exists as a key in or map and it's not undefined
    //we need to add the !== undefined because of JavaScript working
    if (map[arr[i]] !== undefined) {
      //return it
      return arr[i];
      //if it doesn't, add it to the hash table
    } else {
      map[arr[i]] = i;
    }
  }
  //   console.log(map);
  return undefined;
}

console.log(moreEfficientFindRepeatedItem(arr1));
console.log(moreEfficientFindRepeatedItem(arr2));
console.log(moreEfficientFindRepeatedItem(arr3));
