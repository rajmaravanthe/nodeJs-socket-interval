var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    setInterval(function () {
        socket.emit('message', { message: "welcome to my socket.io app"});
    }, 20000);


});
server.listen(3000); 