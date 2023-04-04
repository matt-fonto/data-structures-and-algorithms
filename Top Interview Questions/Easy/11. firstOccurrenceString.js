/* Given two strings needle and haystack, return the index of the first occurrence of needle in 
haystack, or -1 if needle is not part of haystack. 

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/

var strStr = function (haystack, needle) {
  if (!needle) return 0;

  //outer for loop
  for (let i = 0; i < haystack.length; i++) {
    //inner for loop: needle's length
    //substring(startIndex, endIndex)
    //subtring(0, 3)
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

let haystack = "sadbutsad";
let needle = "sad";

console.log(strStr(haystack, needle));
