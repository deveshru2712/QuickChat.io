import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectToDb from "./config/Db.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

dotenv.config();

app.use("/api/auth", authRouter);

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hii there");
});

app.listen(port, () => {
  connectToDb();
  console.log(`server is running on the port: ${port}`);
});
