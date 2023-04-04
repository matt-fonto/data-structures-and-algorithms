//Given a number N return the index value of the Fibonacci sequence, where the sequence is

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
//pattern: each value is the sum of the two previous values, meaning N=5 -> 2+3;

//O(n);
function fibonnaciLoop(n) {
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

//O(2^n) => pretty bad. It's exponencial time
function fibonnaciRecursive(n) {
  console.log(n);
  if (n < 2) {
    return n;
  }
  //n(8) - 1 = 7               //n(8) - 2 = 6
  return fibonnaciRecursive(n - 1) + fibonnaciRecursive(n - 2);
}

console.log(fibonnaciRecursive(8));
//at the 8th index, the result is 21

console.log(fibonnaciLoop(8));
