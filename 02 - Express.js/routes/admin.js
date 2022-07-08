const express = require('express');
const fs = require("fs");

const router = express.Router();

router.get('/product-form', (req, res) => {
	console.log(req.body);

	res.status(200).send(
		`<form action="/product" method="post">
			<input type="text" name="title">
			<button type="submit">submit</button>
		</form>`
	)
});

router.post('/add-product', async (req, res) => {
	console.log(req.body);

	res.status(200).send(`product ${req.body.title} added`);
	await fs.writeFile('./database/products.txt', req.body.title, (err) => {
		console.log(err)
	})
})

module.exports = router;
