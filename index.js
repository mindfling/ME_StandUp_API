import http from 'node:http'

const hello = 'Hello Node';
const PORT = 8080;

console.log(hello);

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    });
    res.end('Hello Server');
  }
    
  )
  .listen(PORT);
