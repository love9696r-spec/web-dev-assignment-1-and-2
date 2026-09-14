// Task 2: Using Custom Module - app.js

// Import the custom module using require
const isEven = require("./isEven");

// Testing the module
console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false
console.log("Is 10 even?", isEven(10)); // true
