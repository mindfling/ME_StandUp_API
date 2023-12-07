import http from 'node:http'
import fs from 'node:fs'
import { log } from 'node:console'; //?

const hello = 'Hello Node'; //
log(hello); //?

const PORT = 8080;
const FILE_PATH = 'comedians.json';

const comediansURL = '/comedians';

let text = ''; // todo temp var

// todo читаем файл
fs.readFile(FILE_PATH, 'utf-8', (err, data) => {
  text = data;
})

http
  .createServer((req, res) => { // создаем сервер
    
    if (req.method === 'GET' && 
        req.url === comediansURL) {

    } else {
      res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      res.end('Not Found');
    }

    
    // заголовок ответа
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    });

    // ответ сервера
    // res.end(text);
    res.end(`<body style="font-family:sans-serif;background-color:#1a1a2a;color:lawngreen">
        <h1>Hello Server</h1>
        <p>our file:</p>
        <pre>${text}</pre>
      </body>`);
      
    }

  )
  .listen(PORT); // слушаем порт

console.log('Сервер запущен на порту', PORT);
