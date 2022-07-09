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

const postAddProduct = (req, res, next) => {
	const productDto = req.body;
	const newProduct = new Product(productDto.title, productDto.price, productDto.description);

	newProduct.save();

	res.redirect('/');
}

const getProducts = (req, res, next) => {
	const products = Product.getAllProducts();

	res.render('shop', {
		pageTitle: 'Shop',
		path: '/',
		products: products,
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true
	});
}

module.exports = {
	getAddProduct,
	postAddProduct,
	getProducts,
}
