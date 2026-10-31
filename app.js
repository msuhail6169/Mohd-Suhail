const express = require("express");

const app = express();

// Route 1: Welcome Page
app.get("/", (request, response) => {
    response.status(200).send("Welcome to Node.js and Express!");
});

// Route 2: About Page
app.get("/about", (request, response) => {
    response.status(200).json({
        name: "Mohd Suhail",
        section: "CSE"
    });
});

// Route 3: Current Date and Time
app.get("/time", (request, response) => {
    const currentTime = new Date();
    response.status(200).send(currentTime.toString());
});

// Route 4: 404 - Unknown Routes
app.use((request, response) => {
    response.status(404).send("404 - Page Not Found");
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;