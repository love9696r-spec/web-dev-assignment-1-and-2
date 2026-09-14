// Task 4: File Manager using fs module
const fs = require("fs");

const fileName = "demo.txt";

// 1. Create file (writeFile)
fs.writeFile(fileName, "Hello! Initial file content.", (err) => {
  if (err) {
    console.log("Error creating file:", err);
    return;
  }
  console.log("1. File created successfully.");

  // 2. Read file (readFile)
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    console.log("2. File content:", data);

    // 3. Update file (appendFile)
    fs.appendFile(fileName, "\nThis is appended text.", (err) => {
      if (err) {
        console.log("Error updating file:", err);
        return;
      }
      console.log("3. File updated successfully.");

      // 4. Delete file (unlink)
      fs.unlink(fileName, (err) => {
        if (err) {
          console.log("Error deleting file:", err);
          return;
        }
        console.log("4. File deleted successfully.");
      });
    });
  });
});
