const express = require('express');

const app = express();

app.use((res, req, next) => {
	console.log('res')
	console.log(res)
	console.log('req')
	console.log(req)

	next();
});

app.listen(4000);
