const express = require('express');
const adminData = require('./admin');
const { products } = require("./admin");

const router = express.Router();

router.get('/', (req, res, next) => {
	console.log(products)
	res.render('shop', {
		pageTitle: 'Shop',
		products: adminData.products,
		path: '/',
	})
});

module.exports = router;
