import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname을 ES 모듈에서 사용하기 위한 설정 //EJS에서는 __dirname을 사용할 수 없어서  변수를 지정해줘야함.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(`loading... http://localhost:${process.env.PORT}`);
});
