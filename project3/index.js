let express = require('express');
let http = require('http');
const { emit } = require('process');
let io = require("socket.io");

let app = express();
let server = http.createServer(app); // wrap the express app with http
io = new io.Server(server); // use socket.io on the http app

app.use('/', express.static('public'));

// sockets --> check for socket connection
io.sockets.on("connection", (socket) => {
    console.log("We have a new client", socket.id)
    // drop a message on the server when socket disconnects
    socket.on("disconnect", () => {
        console.log("socket has been disconnected", socket.id)
    })

    // receive and process information from client
    socket.on("interactionData", (data) => {
        console.log(data);
        // emit information to ALL clients
        io.sockets.emit("interactionDataFromServer", data)
    })
})

// server listening on port
server.listen(8801, () => {
  console.log("server is up and running")
})