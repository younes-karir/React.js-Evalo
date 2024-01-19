const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authmiddleware");



const { setQst, QstAssign } = require("../controllers/questionnaire.controller");

router.route("/").post(protect, setQst);
router.route("/assign").post(QstAssign);


module.exports = router;
