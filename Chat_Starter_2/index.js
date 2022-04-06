//Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);

//Initialize socket.io
//Initialize socket.io
let io = require('socket.io');
io = new io.Server(server);

let noVotesA = 0;
let noVotesB = 0;

let inputSockets = io.of("/input");
let outputSockets = io.of("/output");

inputSockets.on("connect", (socket) => {
    console.log("socket connected to input namespace", socket.id);

    socket.on("votedA", () => {
        noVotesA++;
        console.log("votesA :", noVotesA, "votesB :", noVotesB);

        let data = {
            a: noVotesA,
            b: noVotesB
        }
        outputSockets.emit("votes", data)
    })

    socket.on("votedB", () => {
        noVotesB++;
        console.log("votesA :", noVotesA, "votesB :", noVotesB);

        let data = {
            a: noVotesA,
            b: noVotesB
        }
        outputSockets.emit("votes", data)
    })

    socket.on('disconnect', () => {
        console.log("socket disconnected from input namespace", socket.id);
    })
})

outputSockets.on("connect", (socket) => {
    console.log("socket connected to output namespace", socket.id);

    socket.on('disconnect', () => {
        console.log("socket disconnected from output namespace", socket.id);
    })
})


//run the createServer
let port = process.env.PORT || 4500;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});
