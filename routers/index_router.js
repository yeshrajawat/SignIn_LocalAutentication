const express = require('express');
const router = express.Router();

router.use('/users',require('./user_router'));
console.log('Router Loaded');
module.exports = router;