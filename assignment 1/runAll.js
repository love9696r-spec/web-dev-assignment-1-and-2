// runAll.js - Single file to run and test all tasks in one command!
const { execSync } = require("child_process");

function run(command) {
  console.log(`> ${command}`);
  try {
    const output = execSync(command).toString();
    console.log(output);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

console.log("==========================================");
console.log("  LAB ASSIGNMENT 1: SMART UTILITY TOOLKIT ");
console.log("==========================================\n");

// Task 1: CLI Calculator
console.log("--- Task 1: CLI Calculator (process.argv) ---");
run("node calculator.js add 10 5");
run("node calculator.js sub 20 8");
run("node calculator.js mul 6 7");
run("node calculator.js div 20 4");
run("node calculator.js unknown 10 5");

// Task 2: Custom Module
console.log("--- Task 2: Custom Module (isEven) ---");
run("node app.js");

// Task 4: File Manager
console.log("--- Task 4: File Manager (fs) ---");
run("node fileManager.js");

// Task 5: Dice Generator
console.log("--- Task 5: Dice Generator (crypto) ---");
run("node dice.js");

// Task 3 Notice
console.log("==========================================");
console.log("  Task 3: HTTP Server                     ");
console.log("  Run separately with: node server.js     ");
console.log("  Then visit: http://localhost:3000       ");
console.log("==========================================");
