const http = require('node:http');
const fs = require('node:fs');
const { log } = require('node:console');

const server = http.createServer((req, res) => {
  // req.method GET POST PUT DELETE
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home page!');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About page!');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Api page!');
  } else {
    res.writeHead(404);
    res.end('Page Not Found!');
  }
});

server.listen(3000, () => console.log('Server running on port 3000'));
