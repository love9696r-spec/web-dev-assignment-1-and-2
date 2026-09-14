// Custom Logger Middleware
// Logs the HTTP method and request URL for each incoming request
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
};

module.exports = logger;
