console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

// 3. console.log("2");
// 2. setTimeout()
// 1. console.log("1");
//CALL STACK

// setTimeout, 2seconds
//WEB API

//callback of setTimeout after 2s
//CALLBACK QUEUE

//is the call stack empty?
//callback is moved to the call stack
//EVENT LOOP
