const express = require('express');
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get('/add-product', (req, res) => {
	console.log(req.body);

	res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/add-product', async (req, res) => {
	console.log(req.body);

	res.status(200).send(`product ${req.body.title} added`);
	await fs.writeFile('./database/products.txt', req.body.title, (err) => {
		console.log(err)
	})
})

module.exports = router;
