const addFn = require("./add.js");
// Name of the constant can be anything. Doesn't have to be thhe export value.

console.log("Hello from index.js");

const sum = addFn(2, 3);
console.log(sum);
const sum2 = addFn(3, 6);
console.log(sum2);
