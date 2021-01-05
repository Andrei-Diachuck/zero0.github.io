/*let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res) {
  console.log("URL страницы: " + req.url);
  if(req.url === '/index' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
  }else if(req.url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/about.html', 'utf8').pipe(res);
  }else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log("Порт 3000");*/

let express = require('express');

let app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get('/about', function (req, res) {
  res.sendFile(__dirname + "/about.html")
});



app.listen(3000);
