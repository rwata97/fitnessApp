const router = require('express').Router();
const User = require('../models/User');
const authController = require('../controllers/auth');

const { protect } = require('../middlewares/AuthMiddleware');

router.post('/signup', authController.postSignup);

router.post('/login', authController.postLogin);

router.get('/', protect, authController.getUserData);

module.exports = router;
