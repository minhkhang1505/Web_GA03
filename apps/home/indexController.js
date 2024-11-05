const indexService = require("./indexService");
const { StatusCodes, getReasonPhrase } = require("http-status-codes");

async function renderHomePage(req, res) {
	try {
		const productsObject =
			await indexService.getAllProductsAsObject();
		// console.log(productsObject.computers);
		// console.log(productsObject.mobilephones);
		// console.log(productsObject.computers);

		console.log(productsObject.televisions);

		res.render("index", { products: productsObject });
	} catch (error) {
		console.error("Error rendering home page:", error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
			getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
		);
	}
}

module.exports = {
	renderHomePage,
};
