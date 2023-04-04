//1. reference type = arrays are referenced in memory, not stored by value, like primitive types

//2. context vs. scope
//context: what object "owns" that environment
//scope: accessibility or visibility of variables, functions and objects. Global vs. Local
function stuff() {
  //this is the local scope
}
//this = object environment we're right now. What's to left of the '.'?
// this.alert("hello");
// window.alert("hello");

const objectFunc = {
  a: function () {
    console.log(this);
  },
};
objectFunc.a();

//3. instantiation = making a copy/instance of an object
class Player {
  //setting up the class
  constructor(name, type) {
    this.name = name; //create these properties
    this.type = type;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
  }
}

//adding on top of what Player has
class Wizard extends Player {
  constructor(name, type) {
    //super is used in a class that extends another
    //super = allows us to access the parent's methods and properties
    super(name, type);
  }

  play() {
    console.log("Magic spell");
  }
}

const wizardOne = new Wizard("John", "Dark Magic");
const wizardTwo = new Wizard("Mary", "Healer");

wizardOne.introduce();
wizardOne.play();

wizardTwo.introduce();
wizardTwo.play();
