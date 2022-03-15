const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user_controller');
router.get('/sign-in',user_controller.signIn);
module.exports = router;