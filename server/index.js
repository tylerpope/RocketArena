var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);

var players = {};
 
app.use(express.static('../'));
 
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../index.html'));
});

io.on('connection', function(socket){
  console.log('user connected');
});

io.on('disconnect', function () {
  console.log('user disconnected');
});
 
server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});