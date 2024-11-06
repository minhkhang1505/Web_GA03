const router = require("express").Router();
const mobilephoneController = require("./mobilephoneController");

router.get("/", mobilephoneController.renderMobilephoneCategoryPage);

router.get("/:televisionId", mobilephoneController.renderMobilephoneDetailPage);

module.exports = router;
