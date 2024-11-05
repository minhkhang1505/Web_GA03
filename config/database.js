const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
	max: process.env.DB_MAX_CLIENTS,
	idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT_MILLIS,
});

module.exports = pool;
