import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hii there");
});

app.listen(port, () => {
  console.log(`server is running on the port: ${port}`);
});
