const express = require("express");
const { Pool } = require("pg");
const app = express();
const testRoute = require("./routes/testRoute");
require("dotenv").config();

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware to serve static files
app.use(express.static("public"));

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get("/computers", async (req, res) => {
	try {
	  const result = await pool.query("SELECT * FROM Computers");
	  res.render("category", { products: result.rows });
	} catch (err) {
	  console.error(err);
	  res.send("Error " + err);
	}
});

app.get("/category", async (req, res) => {
	try {
	  const result = await pool.query("SELECT * FROM MobilePhones");
	  res.render("category", { products: result.rows });
	} catch (err) {
	  console.error(err);
	  res.send("Error " + err);
	}
});

app.get("/televisions", async (req, res) => {
	try {
	  const result = await pool.query("SELECT * FROM Televisions");
	  res.render("category", { products: result.rows });
	} catch (err) {
	  console.error(err);
	  res.send("Error " + err);
	}
});
// Use the user routes
app.use("/", testRoute);

// Start the server
const HOST = process.env.SERVER_HOST || "localhost";
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}`);
});
