const {WebSocketServer} = require("ws");
const dotenv = requere("dotenv");

dotenv.config();

const wss = new WebSocketServer({port:process.env.PORT || 8080});

wss.on("connection", (ws) =>{
    ws.on("error", console.error);

    
    ws.on("menssage", (data) => {
        wss.clients.forEach((clients) => clients.send(data.toString()));
    });

    console.log("client conect");
});