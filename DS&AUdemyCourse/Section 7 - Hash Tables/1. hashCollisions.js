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
console.log(user);
