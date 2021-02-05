const http = require('http');
const todos = [
  { id: 1, text: 'Todo 1' },
  { id: 2, text: 'Todo 2' },
  { id: 3, text: 'Todo 3' },
];
const server = http.createServer((req, res) => {
  res.writeHead(404, {
    'Content-type': 'application/json',
  });
  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log('end', body);
    });

  console.log(req.headers.authorization);
  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
