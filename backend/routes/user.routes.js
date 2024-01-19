const express = require("express");
const router = express.Router();

const  {resgiterUser, LoginUser, getMe} = require('../controllers/user.controller');

const {protect} = require('../middleware/authmiddleware');

router.post('/',resgiterUser);
router.post('/login',LoginUser);
router.get('/me',protect,getMe);


module.exports = router;