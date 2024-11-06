const router = require("express").Router();
const registerController = require("./registrationController");

router.post("/", registerController.renderRegisterPage);


module.exports = router;