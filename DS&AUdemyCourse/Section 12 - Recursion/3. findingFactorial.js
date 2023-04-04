//Write two functions that find the factorial of any number
//One should be recursive
//The other should use a loop

//O(n);
function recursiveFactorial(num) {
  console.log(num);

  if (num === 0) return 1;
  else return num * recursiveFactorial(num - 1); //we need to get lower and lower until we hit the base case;
}

//O(n);
function loopFactorial(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
    console.log(i);
    console.log(result);
  }

  return result;
}

loopFactorial(5);
recursiveFactorial(5);
