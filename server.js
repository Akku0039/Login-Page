//importing express
const { Socket } = require('engine.io');
const express = require('express');

// Sets up our express-> allows us to create a server
const app = express();
// making a server ussing http and express
const server = require('http').Server(app);

//giving public folder to my express app 
app.use(express.static('public'));

//importing our socket io and linking with the server
const io = require('socket.io')(server);
io.on('connection' , (socket)=>{
    socket.on('message' ,(data)=>{
        io.emit('message' , data);
    })
})
const PORT = 9000;
server.listen(PORT,()=>{
    console.log(`Server is run on PORT ${9000}`);
})