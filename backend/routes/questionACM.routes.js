const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authmiddleware');

const  {AddQuestion, GetQuestions, RemoveQuestion} = require('../controllers/questionACM.controllers');




router.route('/').post(protect,AddQuestion);
router.route('/all').post(GetQuestions);
router.route('/:id').delete(protect,RemoveQuestion);


module.exports = router;