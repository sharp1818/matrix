const express = require("express");
const matrixController = require("../controllers/matrixController");

const router = express.Router();

router.post("/", matrixController.process);

module.exports = router;
