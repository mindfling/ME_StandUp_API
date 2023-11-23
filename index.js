import http from 'node:http'

const hello = 'Hello Node';
console.log(hello);

http
  .createServer()
  .listen(8080);
  
