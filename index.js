var app = require('express')();
var http = require('http').Server(app);

var apiController = require('./controllers/apiController');

// set the view engine to ejs
app.set('view engine', 'ejs');

apiController(app);

// socket.io stuff here:
var io = require('socket.io')(http);

io.on('connection', function(socket){
  
  // io.emit('chat message', 'A user connected');
  // console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

// run server, set port
http.listen(3000, function(){
  console.log('listening on port:3000');
});