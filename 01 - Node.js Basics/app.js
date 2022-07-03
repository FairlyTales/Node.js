const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url)
	console.log(req.method)

	res.setHeader('Content-type', 'text-html')
	res.write('<html lang="en US">')
	res.write('<head><title>Hello World!</title></head>')
	res.write('<body><h1>Hello World!</h1></body>')
	res.write('</html>')

	res.end();
})

server.listen(4000)
