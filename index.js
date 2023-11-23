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
      "Content-Type": "text/html; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    });
    res.end('<h1>Hello Server</h1><p>our file...</p>');
  }
    
  )
  .listen(PORT);
  
console.log('Сервер запущен на порту', PORT);
