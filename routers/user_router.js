const express = require('express');
const passport = require('passport');
const router = express.Router();
const LocalPassport = require('../config/passport_local_strategy')
const user_controller = require('../controllers/user_controller');
router.get('/profile',LocalPassport.checkAuthenticated,user_controller.profile)
router.get('/sign-in',user_controller.signIn);
router.get('/sign-up',user_controller.signUp);
router.post('/create-session',passport.authenticate('local',{failureRedirect:'/users/sign-in'}),user_controller.profile);
router.post('/createUser',user_controller.createUser);
module.exports = router;