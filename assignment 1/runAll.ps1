Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "      LAB ASSIGNMENT 1 - ALL-IN-ONE RUNNER" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/5] Running Task 1: CLI Calculator (process.argv)" -ForegroundColor Yellow
Write-Host "Command: node calculator.js add 10 5"
node calculator.js add 10 5
Write-Host "Command: node calculator.js sub 20 7"
node calculator.js sub 20 7
Write-Host "Command: node calculator.js mul 6 7"
node calculator.js mul 6 7
Write-Host "Command: node calculator.js div 20 4"
node calculator.js div 20 4
Write-Host "Command: node calculator.js invalid 5 5"
node calculator.js invalid 5 5
Write-Host ""
pause

Write-Host "[2/5] Running Task 2: Custom Module (isEven.js + app.js)" -ForegroundColor Yellow
Write-Host "Command: node app.js"
node app.js
Write-Host ""
pause

Write-Host "[3/5] Running Task 4: File Manager (fs)" -ForegroundColor Yellow
Write-Host "Command: node fileManager.js"
node fileManager.js
Write-Host ""
pause

Write-Host "[4/5] Running Task 5: Random Dice Generator (crypto.randomInt)" -ForegroundColor Yellow
Write-Host "Command: node dice.js"
node dice.js
Write-Host ""
pause

Write-Host "[5/5] Starting Task 3: Basic HTTP Server (http module)" -ForegroundColor Yellow
Write-Host "Server starting on port 3000..."
Write-Host "Open in browser: http://localhost:3000"
Write-Host "Press Ctrl + C to stop the server when done."
Write-Host "---------------------------------------------------"
node server.js
