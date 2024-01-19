const express = require("express");
const { getAll, setPaper } = require("../controllers/paper.controller");
const router = express.Router();
const {protect} = require('../middleware/authmiddleware');

router.route('/').get(getAll).post(setPaper);




module.exports = router;