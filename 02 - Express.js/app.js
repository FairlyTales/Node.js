const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);

app.use('/', (req, res, next) => {
	res.status(404).send('<h1>Page not found</h1>');

	next();
});

app.listen(4000);
