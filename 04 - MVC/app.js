const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.route');
const shopRoutes = require('./routes/shop.route');

const errorController = require('./controllers/error.controller')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

app.use(errorController.error404);

app.listen(3000);
