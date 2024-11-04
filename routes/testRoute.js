const express = require("express");
const path = require("path");
const { getAllUsers } = require("../config/database");
const { log } = require("console");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		console.log("got here");

		const usersReceived = await getAllUsers();
		console.log("oke");
		log("Received:", usersReceived);
		res.render("index", { users: usersReceived });
	} catch (error) {
		res.status(500).send("Error fetching users");
	}
});
module.exports = router;
