const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.get('/login', adminController.getLogin);
router.post('/login', adminController.postLogin);
router.get('/dashboard', isAuthenticated, adminController.getDashboard);
router.get('/products', isAuthenticated, adminController.getProducts);
router.get('/logout', adminController.logout);

module.exports = router;
