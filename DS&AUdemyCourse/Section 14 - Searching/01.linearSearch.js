let countries = ["Brazil", "Netherlands", "China", "Japan"];

function findChina(item) {
  return item === "China";
}
console.log(countries.indexOf("China"));
console.log(
  countries.findIndex(function (item) {
    return item === "China";
  })
);
