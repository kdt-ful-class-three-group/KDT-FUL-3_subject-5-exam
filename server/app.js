import express from 'express';
import bodyParser from 'body-parser';
import banRoutes from './routes/ban.js';
import pickRoutes  from './routes/pick.js';
import teamRoutes from './routes/team.js';


const app = express();
const PORT = 8004;

// JSON 파싱 미들웨어
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // 모든 출처 허용 (* 대신 정확한 출처도 가능)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// 사용자 라우트 사용
app.use('/api/bans', banRoutes);
app.use('/api/picks', pickRoutes);
app.use('/api/teams', teamRoutes);



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});