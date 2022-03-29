const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/get-user-info", UserController.getUserInfo);

module.exports = router;
