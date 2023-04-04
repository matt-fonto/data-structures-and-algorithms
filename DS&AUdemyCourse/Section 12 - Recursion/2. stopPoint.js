let counter = 0;

function inception() {
  debugger;

  //base case
  if (counter >= 3) {
    return "done!";
  }

  counter++;
  return inception(); // this allows our result to bubble up at the end, otherwise we lose the result
}

inception();
