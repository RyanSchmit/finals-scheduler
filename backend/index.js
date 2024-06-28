require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = 8080;

app.listen(PORT, () => console.log(`It's alive at http://localhost:${PORT}`));

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/api/getSchedule", (req, res) => {
  const sql = "SELECT * FROM Tuesday_Thursday";
  const query = db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
