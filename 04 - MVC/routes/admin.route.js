const express = require('express');
const productsController = require('../controllers/products.controller')

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;
