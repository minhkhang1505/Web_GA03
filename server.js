const express = require("express");
const app = express();
const testRoute = require("./routes/testRoute");
require("dotenv").config();

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware to serve static files
app.use(express.static("public"));

// Use the user routes
app.use("/", testRoute);

// Start the server
const HOST = process.env.SERVER_HOST || "localhost";
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, HOST, () => {
	console.log(`Server is running on port ${PORT}`);
});
