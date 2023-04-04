//drop the non dominants
function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers");
  //O(n) -> linear = loop
  numbers.forEach((num) => console.log(num));

  //O(n^2) -> quadratic = nested loop
  //if we had 3 lested loops, it would be O(n^3) and so on
  console.log("these are their sums");
  numbers.forEach((firstNum) => {
    numbers.forEach((secondNum) => console.log(firstNum + secondNum));
  });
}
printAllNumbersThenAllPairSums([1, 2, 3]);
// ☝️ O(n + n^2) => drop the non dominants (get only the biggest), so we've got:
// O(n^2)
