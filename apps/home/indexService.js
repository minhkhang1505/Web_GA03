const pool = require("../../config/database");

async function getAllProductsAsObject() {
	try {
		let queryResult = await pool.query("SELECT * FROM computers");
		let computers = convertQueryResultToProductsArray(queryResult);

		queryResult = await pool.query("SELECT * FROM mobilephones");
		let mobilephones =
			convertQueryResultToProductsArray(queryResult);

		queryResult = await pool.query("SELECT * FROM televisions");
		let televisions =
			convertQueryResultToProductsArray(queryResult);

		let products = {
			computers: computers,
			mobilephones: mobilephones,
			televisions: televisions,
		};
		return products;
	} catch (err) {
		console.error("Error fetching products:", err);
		throw err;
	}
}

function convertQueryResultToProductsArray(queryResult) {
	let products = [];
	for (let i = 0; i < queryResult.rowCount; i++) {
		products.push(queryResult.rows[i]);
	}
	return products;
}

module.exports = {
	getAllProductsAsObject,
};
