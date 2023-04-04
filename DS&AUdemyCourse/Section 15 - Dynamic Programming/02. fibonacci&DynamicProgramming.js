let calculations = 0;
//Recursive -> Pretty operation-heavy
function fibonacci(n) {
  calculations++;
  console.log(calculations);
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

//the code above works, but it's not very efficient
//We could make this function more effective? - Dynamic Programming

//Dynamic programming
let calculationsTwo = 0;
function dynamicFibonnaci(n) {
  console.log(calculationsTwo);

  //where we'll store the fib numbers
  //0 and 1 = base cases
  const fib = [0, 1];

  //we iterate from 2 --skipping 0 and 1 -- until n
  //i = index in the fib array
  for (let i = 2; i <= n; i++) {
    calculationsTwo++;
    console.log(i);
    fib[i] = fib[i - 1] + fib[i - 2];
    console.log(fib[i]);
  }

  return fib[n];
}

console.log(dynamicFibonnaci(10));
console.log(calculationsTwo);
