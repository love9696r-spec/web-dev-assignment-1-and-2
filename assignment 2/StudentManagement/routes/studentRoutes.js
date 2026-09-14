const express = require("express");
const router = express.Router();
const students = require("../data/students");

// 1. GET /students - Return all students
router.get("/", (req, res) => {
    res.status(200).json(students);
});

// 2. GET /students/:id - Return student by ID
router.get("/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find((s) => s.id === studentId);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});

// 3. POST /students - Add a new student
router.post("/", (req, res) => {
    const { name, age, course } = req.body;

    // Validation: Check if all required fields are present
    if (!name || !age || !course) {
        return res.status(400).json({ message: "Invalid student data. Name, age, and course are required." });
    }

    // Auto-generate new student ID
    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;

    const newStudent = {
        id: newId,
        name: name,
        age: Number(age),
        course: course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student created successfully",
        student: newStudent
    });
});

// 4. PUT /students/:id - Update an existing student
router.put("/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find((s) => s.id === studentId);

    // Check if student exists
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, age, course } = req.body;

    // Validation: Check if all required fields are provided
    if (!name || !age || !course) {
        return res.status(400).json({ message: "Invalid student data. Name, age, and course are required." });
    }

    // Update student details
    student.name = name;
    student.age = Number(age);
    student.course = course;

    res.status(200).json({
        message: "Student updated successfully",
        student: student
    });
});

// 5. DELETE /students/:id - Delete student by ID
router.delete("/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const index = students.findIndex((s) => s.id === studentId);

    // Check if student exists
    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    // Remove student from array
    const deletedStudent = students.splice(index, 1)[0];

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});

module.exports = router;
