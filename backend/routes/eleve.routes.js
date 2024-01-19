const express = require("express");
const router = express.Router();
const {protect} = require('../middleware/authmiddleware');

const  { GetAll, setEleve, RemoveEleve } = require('../controllers/eleve.controller');

router.route('/all').post(protect,GetAll)
router.route('/').post(protect,setEleve);
router.route('/:id').delete(protect,RemoveEleve);


module.exports = router;