const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', (req, res, next) => {
	console.log(req.body);
	res.status(200).send('data received: ' + req.body.field.toString())
});

app.use('/', (req, res, next) => {
	res.status(404).send('<h1>Page not found</h1>');

	next();
});

app.listen(4000);
