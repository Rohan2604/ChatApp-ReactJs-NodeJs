const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const server = http.createServer(app);  //generates sever

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"],
    },
})

// An event needs some action and thus we are writing a callback function.
io.on("connection", (socket) => {   // user connected event
    console.log(`User Connected : ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID : ${socket.id} joined room : ${data}`);
    });

    socket.on("send_message",(data) => {
        socket.to(data.room).emit("recieve_message",data); //sends data to all the users that are in same chat as You using the roomID
    });

    socket.on("disconnect", () => {   //user disconnected event
        console.log(`user ${socket.id} ${socket.username} disconnected`);
    });
});

server.listen(3001, () => {
    console.log('listening on port: ', 3001)
});
