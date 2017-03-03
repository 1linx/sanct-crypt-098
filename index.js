var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

var apiController = require('./controllers/apiController');

var numberOfUsers = 0;

// set the view engine to ejs
app.set('view engine', 'ejs');

apiController(app);

// socket.io stuff here:
var io = require('socket.io')(http);

io.on('connection', function(socket){
  // io.emit('chat message', 'A user connected');
  console.log('a user connected');
  numberOfUsers++;
  io.emit('user connected', numberOfUsers);

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('1 user disconnected');
    numberOfUsers--;
    var disconMessage = "A user disconnected"
    io.emit('user disconnected', numberOfUsers);
  });
});

// run server, set port
http.listen(port, function(){
  console.log('listening on port:3000');
});