require("dotenv").config();
const app = require("express")();
const mysql = require("mysql2");

const PORT = 8080;

app.listen(PORT, () => console.log(`It's alive at http://localhost:${PORT}`));

const db = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

async function start() {
  const results = await db.query("SELECT * FROM Tuesday_Thursday");
  console.log(results[0]);
}

start()
