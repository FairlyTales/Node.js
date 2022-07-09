// TODO: move products to Model
const products = [];

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
	const product = req.body;

	products.push({
		title: product.title,
		price: product.price,
		description: product.description
	});

	res.redirect('/');
}

const getProducts = (req, res, next) => {
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
