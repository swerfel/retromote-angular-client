const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onConnection(socket){
  console.log('user connected');
  socket.on('disconnect', function(){ console.log('user disconnected'); });
  socket.on('positionChange', (change) => {
    console.log('broadcasting: '+JSON.stringify(change));
    io.emit('positionChanged', change);
  });
  socket.on('ping', (data) => {
    console.log('Received message from client: ' + data);
    socket.broadcast.emit('ping', data)
  });
  socket.on('error', onError);
}

io.on('connection', onConnection);


http.listen(port, () => console.log('listening on port ' + port));
