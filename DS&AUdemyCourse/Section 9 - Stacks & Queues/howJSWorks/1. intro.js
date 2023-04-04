const a = 1; //allocating memory (Memory Heap)
const b = 10; //allocating memory (Memory Heap)
const c = 100; //allocating memory (Memory Heap)

//call stack = what reads and executes our scripts
console.log(1);
console.log(2);
console.log(3);

const one = () => {
  const two = () => {
    console.log(4);
  };

  two();
};
one();

//What happens when we run the function above? -- STACK (LIFO)
//Step 3: console.log() is performed
//Step 2: two() is called
//Step 1: one() is called

//Moment 1: Stack   Moment 2: Stack       //Moment 3: Stack
//one()             two()                 console.log
//one()               two()
//one()
