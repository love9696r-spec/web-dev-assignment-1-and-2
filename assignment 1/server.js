// Task 3: Basic HTTP Server using http module

const http = require("http");

const server = http.createServer((req, res) => {
  // Set plain text header
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/") {
    res.end("Welcome to the Homepage!");
  } else if (req.url === "/about") {
    res.end("About Page: This is our smart utility toolkit.");
  } else if (req.url === "/contact") {
    res.end("Contact Page: Reach us at contact@example.com");
  } else {
    // 404 for any other route
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found: Page does not exist.");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
