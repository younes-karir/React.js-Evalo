const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authmiddleware');

const  { getAll, setClass, RemoveClass, getLast } = require('../controllers/class.controller');


router.route('/').get(protect,getAll).post(protect,setClass);
router.route('/:id').delete(protect,RemoveClass);
router.route('/last').get(protect,getLast);

module.exports = router;