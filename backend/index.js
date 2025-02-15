import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { app, server } from "./socket/socket.js";

import connectToDb from "./config/Db.js";
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";

app.use(express.json());
app.use(cookieParser());
app.use(cors());

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hii there");
});

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

server.listen(port, () => {
  connectToDb();
  console.log(`server is running on the port: ${port}`);
});
