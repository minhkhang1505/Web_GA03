const router = require("express").Router();
const televisionController = require("./televisionController");

router.get("/", televisionController.renderTelevisionCategoryPage);

router.get("/:televisionId", televisionController.renderTelevisionDetailPage);

module.exports = router;
