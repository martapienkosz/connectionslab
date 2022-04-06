console.log("client says hello");
// client connects to the server
let chatBox = document.getElementById("chat-box-msgs");
let socket = io();
// confirm that the client is connected
socket.on("connect", () => {
  console.log("connected to the server");
});
socket.on("chatMessage", (messages) => {
  chatBox.innerHTML = "";
  for (let i = 0; i < messages.length; i++) {
    let authorName = document.createElement("h1");
    let chatMsg = document.createElement("p");
    authorName.innerHTML = messages[i].name;
    chatMsg.innerHTML = messages[i].msg;
    chatBox.appendChild(authorName);
    chatBox.appendChild(chatMsg);
  }
});
socket.on("messageTyping", (data) => {
  if (data) {
    let typingLabel = document.getElementById("typing-label");
    typingLabel.innerHTML = "user is typing";
  }
});
window.addEventListener("load", () => {
  let sumbitButton = document.getElementById("send-button");
  let chatForm = document.getElementById("chat-form")
  let msgInput = document.getElementById("msg-input");

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name-input").value;
    let msg = document.getElementById("msg-input").value;
    //   emit information to the server
    chatObject = { name, msg };
    socket.emit("chatMessage", chatObject);
  });
  msgInput.onkeypress = () => {
    socket.emit("messageTyping", true);
  };
});
