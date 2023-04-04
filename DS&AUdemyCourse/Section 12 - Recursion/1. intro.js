function inception() {
  inception();
}

//Examples
//Factorial
function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

//Fibonnaci Sequence
function fibonnaci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonnaci(n - 1) + fibonnaci(n - 2);
  }
}
