const createError = require('http-errors');
const express = require('express');
const path = require('path');
const debug = require('debug')('matcher:server');
const http = require('http');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const socketio = require('socket.io')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(_404);

// error handler
app.use(errorPage);

// --------------------------------------------------------------------------------------------------------------------
// socket.io

const server = http.createServer(app);
const expressServer = server.listen(9000);
server.on('error', onError);
server.on('listening', onListening);

const io = socketio(expressServer);

// io.on = io.of('/').on = io.sockets.on
// io.emit = io.of('/').emit = io.sockets.emit
io.on('connection', (socket)=>{
  console.log('socket handshake:', socket.handshake)

  // // build an array to send back with the img and endpoint for each NS
  // let nsData = namespaces.map((ns)=>{
  //   return {
  //     img: ns.img,
  //     endpoint: ns.endpoint
  //   }
  // })
  // // console.log(nsData)
  // // send the nsData back to the client. We need to use socket, NOT io, because we want it to
  // // go to just this client.
  // socket.emit('nsList',nsData);
});

const namespace = {
  name: '/dnd'
};
const dndNs = io.of(namespace.name);

dndNs.on('connection', (nsSocket) => {
  console.log(nsSocket.handshake)
  // const username = nsSocket.handshake.query.username;

  // Various things to do:

  // nsSocket.emit('commandNameToClient', {});
  // nsSocket.on('commandNameFromClient', (dataFromClient, callbackFromClientMaybe) => {
  //
  //   callbackFromClientMaybe({});
  // });
  //
  // nsSocket.on('joinRoom', (roomToJoin) => {
  //   // deal with history... once we have it
  //   console.log(nsSocket.rooms);
  //
  //   const roomToLeave = Object.keys(nsSocket.rooms)[1];
  //   nsSocket.leave(roomToLeave);
  //
  //   nsSocket.join(roomToJoin)
  //   // io.of('/wiki').in(roomToJoin).clients((error, clients)=>{
  //   //     console.log(clients.length)
  //   //     numberOfUsersCallback(clients.length);
  //   // })
  //
  //   // const nsRoom = namespace.rooms.find((room)=>{
  //   //   return room.roomTitle === roomToJoin;
  //   // })
  //
  //   nsSocket.emit('historyCatchUp', nsRoom.history)
  // })
});




function _404(req, res, next) {
  next(createError(404));
}

function errorPage(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
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

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Listening on ' + bind);
}
