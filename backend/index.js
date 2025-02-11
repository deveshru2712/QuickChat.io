import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { Server } from "socket.io";
import http from "http";

import connectToDb from "./config/Db.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

dotenv.config();

io.on("connection", (socket) => {
  console.log("user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id);
  });
});

app.use("/api/auth", authRouter);

const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("hii there");
// });

server.listen(port, () => {
  // connectToDb();
  console.log(`server is running on the port: ${port}`);
});
