import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const users = new Map();

const getReceiverId = (userId) => {
  //this is going to return the socket id of the receiver id
  return users.get(userId);
};

io.on("connection", (socket) => {
  //this set the  new user into users map so that we can get a online user array .

  socket.on("register", (userId) => {
    console.log("connected:", userId);
    users.set(userId, socket.id);

    io.emit("userConnected", {
      userId: userId,
      onlineUsers: Array.from(users.keys()),
    });
  });

  // when the user disconnect i will remove it from the users map then update the onlineUsers list.

  socket.on("disconnect", () => {
    for (const [userId, id] of users.entries()) {
      if (id === socket.id) {
        users.delete(userId);
        io.emit("disconnectedUser", {
          userId: userId,
          onlineUsers: Array.from(users.keys()),
        });
        break;
      }
    }
    console.log("user disconnected:", socket.id);
  });
});

export { io, app, server, getReceiverId };
