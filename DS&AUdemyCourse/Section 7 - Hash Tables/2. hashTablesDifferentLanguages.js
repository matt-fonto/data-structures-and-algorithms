//object = there is no order
//key = needs to be a string
let user = {
  age: 50,
  name: "Bobby",
  magic: true,
  scream: function () {
    console.log("aaah!");
  },
};

user.age; //O(1)
user.spell = "abra kadabra!"; //O(1)

//Map = there is order
//key = it can be anything
const a = new Map();

//Set = similar to map, but just stores the keys, no values
const b = new Set();

//All of them are just this, hash tables
