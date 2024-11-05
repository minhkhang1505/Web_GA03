const express = require("express");
const router = express.Router();
const indexController = require("../home/indexController");

router.get("/", indexController.renderHomePage);

module.exports = router;
