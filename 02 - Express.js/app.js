const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use('/', (req, res, next) => {
	res.status(404).send('<h1>Page not found</h1>');

	next();
});

app.listen(3000);
