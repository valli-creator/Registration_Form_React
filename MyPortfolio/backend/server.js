// backend/server.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "valli",
  database: "VisitorDetails",
});
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// API Endpoint Example: Fetch visitors
app.get("/visitors", (req, res) => {
  db.query("SELECT * FROM visitors", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

const skills = {
  Frontend: ["React", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js"],
  ProgrammingLanguages: ["Java", "Javascript", "C", "C++"],
  IDE: ["Eclipse", "Visual Studio Code"],
  Framework: "Spring Framework",
  Database: ["MySql", "MongoDB-NoSql"],
  VersionControl: "Git/GitHub",
  AutomationTesting: ["Selenium", "JMeter", "Postman", "JUnit", "TestNG"],
  Certified: "AWS Certified Cloud Practitioner",
};

// Route for contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.status(400).json({ error: "All fields are required" });
  } else {
    // Here you can process the form data (e.g., send an email, save to a database)
    console.log(`Received message from ${name} (${email}): ${message}`);
    db.query(
      "INSERT INTO visitors (name, email, message) VALUES (?, ?, ?)",
      [name, email, message],
      (err, results) => {
        if (err) {
          // If there's an error in the query, send a 500 status code with the error
          console.error("Error inserting data: ", err);
          res.status(500).send(err);
        } else {
          // Respond with the data of the inserted visitor
          return res.status(200).json({
            message: "Form submitted successfully",
            visitor: {
              name,
              email,
              message,
            },
          });
        }
      }
    );
  }
});

app.get("/", function (req, res) {
  res.send("Hello From Backend");
});

//Sending skills to frontend React
app.get("/api/skills", (req, res) => {
  res.json({ skills });
});

// Serve the frontend build folder (for production)
app.use(express.static("frontend/build"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
