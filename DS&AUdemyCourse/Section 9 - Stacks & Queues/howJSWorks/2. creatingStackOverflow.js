//RECURSION = The function calls itself
function foo() {
  foo();
}

foo();
//RangeError: Maximum call stack size exceeded
