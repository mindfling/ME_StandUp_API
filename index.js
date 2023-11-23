import http from 'node:http'
import fs from 'node:fs'

const hello = 'Hello Node';
const PORT = 8080;
const FILE_PATH = 'comedians.json';

fs.readFile(FILE_PATH, 'utf-8', (err, data) => {
  console.log(data);
})

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
