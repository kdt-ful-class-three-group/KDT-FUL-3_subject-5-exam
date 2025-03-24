import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// controllers
import { mainController, saveController } from './controllers/mainController.js';

// services
import { fetchChampionData } from './services/championService.js';

// ES 모듈 환경에서 __dirname 사용
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 환경 변수 설정
dotenv.config();

// Express 앱 초기화
const app = express();

// 미들웨어 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));
// 404 에러 처리
app.use((req, res) => {
  res.status(404).send(`
    <script>
      alert('잘못된 접근입니다.');
      location.href = '/';
    </script>
  `);
});

// 라우트 설정
app.get('/', mainController);
app.post('/save', saveController);

// 서버 시작
app.listen(process.env.PORT, () => {
  console.log(`loading... http://localhost:${process.env.PORT}`);
  // 챔피언 데이터 초기화
  fetchChampionData();
}); 