// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

// Alternative way to declare Array
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// ************************************* Array methods ***********************************************

// myArr.push(6)
// myArr.push(7) 

// myArr.pop() // pop method by default remove the last index value from the array.

// myArr.unshift(9)  // his method is used to add an element to the beginning of an array. 
// myArr.shift()  // This method is used to remove the first element of an array.

// ********************************************************* Include Method ***********************************************
/* The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.*/
// console.log("this is include method")
// console.log(myArr.includes(9));
// console.log(myArr.includes(2, 0)); // In this case both the values must be present into the array then it returns true.


// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

/* The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. */
const myn1 = myArr.slice(1, 3)  
// NOTE:  The original array will not be modified.


console.log(myn1);
console.log("B ", myArr);

/*The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements*/
// Syntax: splice(start, deleteCount)
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
