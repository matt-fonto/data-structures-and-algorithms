/* You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2). */
var nearestValidPoint = function (x, y, points) {
  //x = horizontal axis
  //y = vertical axis
  //points = array of coordinates

  //
  let minDist = Infinity;
  let minIndex = -1;

  for (let i = 0; i < points.length; i++) {
    const [pointX, pointY] = points[i];

    console.log(`point X: ${pointX}`); //1, 3, 2, 2, 4
    console.log(`point Y: ${pointY}`); // 2, 1, 4, 3, 4

    if (pointX === x || pointY === y) {
      //Calculate the Manhattan distance
      const dist = Math.abs(pointX - x) + Math.abs(pointY - y);

      //if the Manhattan distrance is less than the minDist
      if (dist < minDist) {
        //
        minDist = dist;
        minIndex = i;
      }
    }
  }

  return minIndex;
};

let x = 3;
let y = 4;
let points = [
  [1, 2],
  [3, 1],
  [2, 4],
  [2, 3],
  [4, 4],
];

console.log(nearestValidPoint(x, y, points));
