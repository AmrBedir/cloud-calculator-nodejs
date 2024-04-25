const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Extract operation and operands from the URL
  const operation = pathname.slice(1);
  const a = parseFloat(query.a);
  const b = parseFloat(query.b);

  // Initialize result variable
  let result;

  // Determine the operation and perform the calculation
  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      if (b === 0) {
        res.statusCode = 400;
        res.end('Cannot divide by zero');
        return;
      }
      result = a / b;
      break;
    default:
      res.statusCode = 400;
      res.end('Invalid operation');
      return;
  }

  // Send the result to the client
  res.statusCode = 200;
  res.end(result.toString());
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
