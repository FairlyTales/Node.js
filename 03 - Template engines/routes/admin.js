const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product'
	})
});

router.post('/add-product', (req, res, next) => {
	const product = req.body;
	console.log(product)
	products.push({
		title: product.title,
		price: product.price,
		description: product.description,
		path: '/admin/add-product'
	})
	res.redirect('/');
});

exports.routes = router;
exports.products = products;
