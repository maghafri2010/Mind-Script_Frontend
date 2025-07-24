
const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");

dotenv.config();
const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// fetch all tasks
app.get("/tasks", (req, res) => {
    const query = "SELECT * FROM tasks";
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" });
        }
        res.json(results);
    });
}
);

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});