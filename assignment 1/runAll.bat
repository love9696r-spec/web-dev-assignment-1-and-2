@echo off
cls
echo ===================================================
echo       LAB ASSIGNMENT 1 - ALL-IN-ONE RUNNER
echo ===================================================
echo.

echo [1/5] Running Task 1: CLI Calculator (process.argv)
echo Command: node calculator.js add 10 5
node calculator.js add 10 5
echo Command: node calculator.js sub 20 7
node calculator.js sub 20 7
echo Command: node calculator.js mul 6 7
node calculator.js mul 6 7
echo Command: node calculator.js div 20 4
node calculator.js div 20 4
echo Command: node calculator.js invalid 5 5
node calculator.js invalid 5 5
echo.
pause
echo.

echo [2/5] Running Task 2: Custom Module (isEven.js + app.js)
echo Command: node app.js
node app.js
echo.
pause
echo.

echo [3/5] Running Task 4: File Manager (fs - writeFile, readFile, appendFile, unlink)
echo Command: node fileManager.js
node fileManager.js
echo.
pause
echo.

echo [4/5] Running Task 5: Random Dice Generator (crypto.randomInt)
echo Command: node dice.js
node dice.js
echo.
pause
echo.

echo [5/5] Starting Task 3: Basic HTTP Server (http module)
echo Server is starting on port 3000...
echo Open your browser and visit:
echo   - http://localhost:3000
echo   - http://localhost:3000/about
echo   - http://localhost:3000/contact
echo   - http://localhost:3000/invalid
echo.
echo Press Ctrl + C to stop the server when you are done.
echo ---------------------------------------------------
node server.js
