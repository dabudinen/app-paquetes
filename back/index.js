// var http = require('http')
// var port = process.env.port || 1337;
// http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port);

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname))
app.set('port', 8080);

const server = app.listen(app.get('port'), () => {
  console.log('Arrancó el demonio web', app.get('port'));
});
