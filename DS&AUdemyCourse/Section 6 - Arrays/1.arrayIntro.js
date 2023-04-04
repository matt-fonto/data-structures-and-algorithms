const strings = ["a", "b", "c", "d"];
//each items takes up 4 shelves of memory, or 4 bybtes = approximation
//1 shelf = 1 byte
//4 items * 4 memory shelves to store = 16 bytes/shelves of storage

console.log(strings[2]); //c

//== 🎯 METHODS
//push = adds at the end -- O(1)
strings.push("added");
console.log(strings);

//pop = removes at the end -- O(1)
strings.pop();
console.log(strings);

//unshift = adds at the beginning -- O(n)
//since unshift adds at the beginning, it changes the index order of the previous elements.
//That's why it's a O(n) because we need to loop through our array
//So, we've got the first limitation of arrays = Adding things to the beginning
strings.unshift("x");
console.log(strings);

//splice = adds/removes items to the array and returns the removed elements -- O(n)
//We need to loop through it
strings.splice(2, 0, "alien");
console.log(strings);
