// Task 5: Random Dice Generator using crypto module
const crypto = require("crypto");

// crypto.randomInt(min, max) generates a number where: min <= number < max
// To get numbers from 1 to 6, we use (1, 7)
const roll = crypto.randomInt(1, 7);
console.log("Dice Rolled:", roll);

// Optional simple loop to show multiple rolls
console.log("\nRolling 3 times:");
for (let i = 1; i <= 3; i++) {
  console.log(`Roll ${i}:`, crypto.randomInt(1, 7));
}
