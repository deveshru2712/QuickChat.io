import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { app, server } from "./socket/socket.js";

import connectToDb from "./config/Db.js";
import authRouter from "./routes/auth.routes.js";

app.use(express.json());
app.use(cookieParser());
app.use(cors());

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hii there");
});

server.listen(port, () => {
  connectToDb();
  console.log(`server is running on the port: ${port}`);
});
