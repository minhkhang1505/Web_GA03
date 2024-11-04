const { Client } = require("pg");
require("dotenv").config();
const client = new Client({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});
client.connect();

async function getAllUsers() {
	console.log("get all users");
	const res = await client.query("SELECT * FROM users");

	let data = [];
	for (let i = 0; i < res.rowCount; i++) {
		data.push(res.rows[i]);
	}

	console.log(data);
	await client.end();

	return data;
}

module.exports = {
	getAllUsers,
};
