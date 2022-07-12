const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'products.json');

const getProductsFromFile = (callback) => {
	fs.readFile(filePath, (err, fileContent) => {
		if (err) {
			return callback([]);
		}

		callback(JSON.parse(fileContent.toString()));
	})
}

class Product {
	constructor(title, price, description) {
		this.title = title;
		this.price = price;
		this.description = description;
	}

	save() {
		getProductsFromFile((products) => {
			products.push(this);

			fs.writeFile(filePath, JSON.stringify(products), (err) => {
				console.log(err)
			})
		})
	}

	static getAllProducts(callback) {
		getProductsFromFile(callback);
	}
}

module.exports = Product;
