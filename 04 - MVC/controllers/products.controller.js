const Product = require('../models/product');

const getAddProduct = (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
}

const postAddProduct = async (req, res, next) => {
	const productDto = req.body;
	const newProduct = new Product(productDto.title, productDto.price, productDto.description);

	await newProduct.save();

	res.redirect('/');
}

const getProducts = async (req, res, next) => {
	Product.getAllProducts((products) => {
		res.render('shop', {
			pageTitle: 'Shop',
			path: '/',
			products: products,
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		});
	});
}

module.exports = {
	getAddProduct,
	postAddProduct,
	getProducts,
}
