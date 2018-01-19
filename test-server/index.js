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

function rebroadcastEvent(socket, eventName) {
  socket.on(eventName, (message) => {
    console.log('broadcasting for '+eventName+': '+JSON.stringify(message));
    socket.broadcast.emit(eventName, message);
  });

}

function onConnection(socket){
  const rebroadcastEvents = ['stickyNewAdded', 'stickyTextChanged', 'stickyMoved', 'stickyToFront', 'stickyDragged']
  console.log('user connected');
  socket.on('disconnect', function(){ console.log('user disconnected'); });
  socket.on('error', onError);
  rebroadcastEvents.forEach(e => rebroadcastEvent(socket, e));
}

io.on('connection', onConnection);


http.listen(port, () => console.log('listening on port ' + port));
