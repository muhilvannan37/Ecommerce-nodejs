const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.get("/list", controllers.Getall);

module.exports = router;
