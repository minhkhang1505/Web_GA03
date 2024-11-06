const pool = require('../../config/database');

async function getAllTelevisions () {
    try {
        const result = await pool.query('SELECT * FROM televisions');
        return result;
    } catch (error) {
        console.error('Error televisionService.getAllTelevision:', error);
        return [];
    }
}

async function getTelevisionById(id) {
    try {
        const result = await pool.query('SELECT * FROM televisions WHERE id = ?', [id]);
        return result;
    } catch (error) {
        console.error('Error televisionService.getTelevisionById:', error);
        return [];
    }
}

module.exports = {
    getAllTelevisions,
    getTelevisionById,
}
    