var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

var apiController = require('./controllers/apiController');

// set the view engine to ejs
app.set('view engine', 'ejs');

apiController(app);

// socket.io stuff here:
var io = require('socket.io')(http);

io.on('connection', function(socket){
  // io.emit('chat message', 'A user connected');
  console.log('a user connected');
  io.emit('user connected', true);

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
    io.emit('user disconnected', true);
  });
});

// run server, set port
http.listen(port, function(){
  console.log('listening on port:3000');
});