const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html lang="en US">');
    res.write('<head><title>Enter text</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" /><button type="submit">btn</button> </form></body>');
    res.write('</html>');

    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', ((chunk) => {
      body.push(chunk);
    }));

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();

      fs.writeFile('message.txt', parsedBody, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');

        return res.end();
      });
    })
  }

  res.setHeader('Content-type', 'text-html');
  res.write('<html lang="en US">');
  res.write('<head><title>Hello World!</title></head>');
  res.write('<body><h1>Hello World!</h1></body>');
  res.write('</html>');

  res.end();
}

module.exports = requestHandler;
