const express = require ('express');
const app = express ();
const server = require ('http').createServer (app);
const io = require ('socket.io').listen (server);
const port = 3000;

io.on ('connection', socket => {
  console.log ('a user connected :D');
  console.log ('server is running on port ' + port);
  socket.on ('chat message', msg => {
    console.log (msg);
    io.emit ('chat message', msg);
  });
});

server.listen (port, () => console.log ('server running on port:' + port));
