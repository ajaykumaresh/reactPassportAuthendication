const express = require('express');
const router = express.Router();
const userAuth = require('../controller/userAuth')
router.get('/validation', userAuth.getSub).post('/signin', userAuth.signin).post('/signup', userAuth.signup);

module.exports = router;