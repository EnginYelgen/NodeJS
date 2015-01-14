// HTML Controls
    
//var app = require('express')();
//var http = require('http').Server(app);
//var io = require('socket.io')(http);

//app.get('/', function (req, res) {
//    res.sendfile('HtmlControls.html');
//});

//io.on('connection', function (socket) {
//    socket.on('text change', function (msg) {
//        io.emit('text change', msg);
//    });
//});

//http.listen(3000, function () {
//    console.log('listening on *:3000');
//});


// Page Visiter Numbers
var count = 0;

var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

    // routing
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/PageView.html');
});

io.sockets.on('connection', function (socket) {

    // when the client emits 'adduser', this listens and executes
    socket.on('PageLoad', function () {
        count++;
        io.sockets.emit('CurrentVisitorCount', count);
    });

    socket.on('disconnect', function () {
        count--;
        io.sockets.emit('PageDisconnect', count);
    });
});
