const {WebSocketServer} = require("ws");
const dotenv = requere("dotenv");

const wss = new WebSocketServer({port:process.env.PORT || 8080});

wss.on("connection", (WebSocketServer) =>{
    
});