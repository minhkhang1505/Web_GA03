const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();



const indexRouter = require("./apps/home/indexRouter");
const televisionRouter = require("./apps/television/televisionRouter");
const mobilephoneRouter = require("./apps/mobilephone/mobilephoneRouter");
const computerRouter = require("./apps/computer/computerRouter");
const registrationRouter = require("./apps/registration/registrationRouter");

const pool = new Pool({
	user: process.env.DB_USERNAME,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
});

const app = express();
// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/televisions", televisionRouter);
app.use("/mobilephones", mobilephoneRouter);
app.use("/computers", computerRouter);
app.use("/register",registrationRouter);

const HOST = process.env.SERVER_HOST || "localhost";
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, HOST, () => {
	console.log(`Server is running at http://${HOST}:${PORT}`);
});
