const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user_controller');
router.get('/sign-in',user_controller.signIn);
router.get('/sign-up',user_controller.signUp);
// router.post('/create-session',user_controller);
router.post('/createUser',user_controller.createUser);
module.exports = router;