class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //creating a fictional hash function
  //private property = you shouldn't access it outside of this class
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = hash + ((key.charCodeAt(i) * i) % this.data.length);
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key); //where we'll store the info

    //if there's nothing in that address
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
      //   console.log(this.data);
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key); //where we'll grab info from
    const currentBucket = this.data[address];

    //if we have something in our memory slot
    if (currentBucket) {
      //iterate through all the items in that memory slot -- in case there was hash collision
      for (let index = 0; index < currentBucket.length; index++) {
        if (currentBucket[index][0] === key) {
          //return the value
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];

    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index]) {
        keysArray.push(this.data[index][0][0]);
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(20);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("apples", 2000));
console.log(myHashTable.set("oranges", 2000));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
