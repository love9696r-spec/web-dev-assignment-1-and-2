const express = require("express");
const app = express();
const PORT = 3000;

// Import Custom Logger Middleware
const logger = require("./middleware/logger");

// Import Modular Student Routes
const studentRoutes = require("./routes/studentRoutes");

// Built-in Express middleware to parse JSON request bodies
app.use(express.json());

// Register Custom Logger Middleware
app.use(logger);

// Mount Student Routes
app.use("/students", studentRoutes);

// Root Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Student Management API",
        endpoints: {
            getAllStudents: "GET /students",
            getStudentById: "GET /students/:id",
            createStudent: "POST /students",
            updateStudent: "PUT /students/:id",
            deleteStudent: "DELETE /students/:id"
        }
    });
});

// Fallback 404 Handler for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Start the Express Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
