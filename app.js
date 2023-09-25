// const http = require('http')

// const server = http.createServer((req,res)=>{
//   if(req.url === '/')
//   res.end('welcome to the home page');
// if(req.url === '/about'){
//   res.end('welcome to about page')
// }
// res.end('<h1>oops!!</h1> <a href="/" >home</a>')
// })
// server.listen(5000)
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Welcome to the home page');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Welcome to the about page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Oops!!</h1> <a href="/">Home</a>');
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
//tis is trial