const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(path.join(__dirname + '/../public')));
io.on('connection',(socket)=>{
    console.log('New user connected');
    socket.on('disconnect',()=>{
        console.log('connection lost');
    });
});

server.listen(3000,()=>{
    console.log('Start listening');
});