//TODO: move it to the database
const products = [];

class Product {
	constructor(title, price, description) {
		this.title = title;
		this.price = price;
		this.description = description;
	}

	save() {
		products.push(this);
	}

	static getAllProducts() {
		return products;
	}
}

module.exports = Product;
