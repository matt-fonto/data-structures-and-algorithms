// create a function that reverses a string

function reverse(str) {
  //check input -> always great starting point
  //cool to make input validation
  if (!str || str.length < 2 || typeof str !== "string") {
    return "No valid input";
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  console.log(backwards);

  return backwards.join("");
}

function reverseTwo(str) {
  return str.split("").reverse().join("");
}

const reverseThree = (str) => str.split("").reverse().join("");

console.log(reverse("Hi, I'm Mateus"));
console.log(reverseTwo("Hi, I'm Mateus"));
console.log(reverseThree("Hi, I'm Mateus"));
