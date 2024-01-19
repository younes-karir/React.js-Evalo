const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authmiddleware');

const  {getAll,setExam, removeExam, updatexam, getLast, getByID} = require('../controllers/exam.controller');


router.route('/').get(protect,getAll).post(protect,setExam);
router.route('/last').get(protect,getLast);
router.route('/:id').delete(protect,removeExam).put(protect,updatexam);
router.route('/get/').post(getByID);




module.exports = router;