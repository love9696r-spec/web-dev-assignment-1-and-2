// Task 1: CLI Calculator using process.argv

// process.argv[0] is node path
// process.argv[1] is file path
// process.argv[2] is operation (add, sub, mul, div)
// process.argv[3] is first number
// process.argv[4] is second number

const op = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (op === "add") {
  console.log("Result:", num1 + num2);
} else if (op === "sub") {
  console.log("Result:", num1 - num2);
} else if (op === "mul") {
  console.log("Result:", num1 * num2);
} else if (op === "div") {
  if (num2 === 0) {
    console.log("Cannot divide by zero!");
  } else {
    console.log("Result:", num1 / num2);
  }
} else {
  console.log("Invalid operation! Use: add, sub, mul, or div");
}
