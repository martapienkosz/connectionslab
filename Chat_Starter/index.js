//Initialize the express 'app' object
let express = require("express");
let app = express();
app.use("/", express.static("public"));

//Initialize the actual HTTP server
let http = require("http");
let server = http.createServer(app);

//Initialize socket.io
//Initialize socket.io
let io = require("socket.io");
io = new io.Server(server);
let messages = [];
// When client tries to connect to server
io.sockets.on("connect", (socket) => {
  console.log("new socket connection,", socket.id);

  //   on discionnection
  socket.on("disconnect", () => {
    console.log("socjet disconnect", socket.id);
  });
  socket.on("chatMessage", (chatObject) => {
    messages.push(chatObject);
    io.sockets.emit("chatMessage", messages);
  });
  socket.on("messageTyping", (data) => {
    socket.broadcast.emit("messageTyping", data);
  });
});

//run the createServer
let port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("Server listening at port: " + port);
});
