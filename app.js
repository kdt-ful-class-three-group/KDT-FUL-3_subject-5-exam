import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * @description banpick.json에 들어갈 초기 데이터 빈 배열
 */
let firstData = [];

// __dirname을 ES 모듈에서 사용하기 위한 설정 //EJS에서는 __dirname을 사용할 수 없어서  변수를 지정해줘야함.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client")));
app.get("/", (req, res) => {
  // * if문으로 banpick.json파일이 없을 경우라는 조건을 내검.
  if (!fs.existsSync("banpick.json")) {
    // * 파일이 없을 경우에 위에서 지정해 놓은 빈배열을 문자열로 바꾼 내용의 banpick.json파일을 생성
    fs.writeFileSync(
      "banpick.json",
      JSON.stringify(firstData, null, 2),
      "utf-8"
    );
  }
  // * 그 이후, index.html을 불러온다.
  res.sendFile(path.join(__dirname, "index.html"));
});

// * /save경로로 post요청이 오면,
app.post("/save", (req, res) => {
  // * req.body의 내용을 banPickData라는 변수에 담고,
  const banPickData = req.body;
  // banPickData 확인
  // console.log(banPickData);

  // * 만일 banpick.json파일이 존재한다면,
  if (fs.existsSync("banpick.json")) {
    // * firstdata라는 변수에 banpick.json의 내용을 파싱해서 담고,
    firstData = JSON.parse(fs.readFileSync("banpick.json"));
    // * firstdata에 banPickData의 내용을 추가해라.
    firstData.push(banPickData);
    // * 그리고 banPickData가 추가된, firstData의 내용으로 banpick.json의 내용을 덮어써라.
    fs.writeFileSync(
      "banpick.json",
      JSON.stringify(firstData, null, 2),
      "utf-8"
    );
  }
});

app.use((req, res) => {
  res.status(404).send(`
  <script>
    alert('잘못된 접근입니다.');
    location.href = '/';
  </script>`);
});

app.listen(process.env.PORT, () => {
  console.log(`loading... http://localhost:${process.env.PORT}`);
});
