const televisionService = require('./televisionService');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');

async function renderTelevisionCategoryPage(req, res) {
    try {
        const televisionsQueryResult = await televisionService.getAllTelevisions();
        res.render('category', { products: televisionsQueryResult.rows });
    } catch (error) {
        console.error('Error rendering television page:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        );
    }
}

async function renderTelevisionDetailPage(req, res) {
    try {
        const televisionId = req.params.id;
        const televisionQueryResult = await televisionService.getTelevisionById(televisionId);
        res.render('product', { product: televisionQueryResult.rows[0] });
    } catch (error) {
        console.error('Error rendering television detail page:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
            getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
        );
    }
}

module.exports = {
    renderTelevisionCategoryPage,
    renderTelevisionDetailPage,
};
