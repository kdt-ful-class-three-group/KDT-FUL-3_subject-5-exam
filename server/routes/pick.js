import express from 'express';
import db from"../db/database.js";

const router = express.Router();

// GET /api/ban

//헬스체크
router.get('/', (req, res) => {
    res.json({ message: "pick 라우터 정상 작동 중!" });
});

router.get('/', (req, res) => {
    db.all('SELECT * FROM picks', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows); // 여기에서만 응답 보내면 됨
    });
});

// POST /api/pick
router.post('/', (req, res) => {
    const { team_id, champion_id, champion_name } = req.body;
    if (!team_id || !champion_id || !champion_name) {
        return res.status(400).json({ error: "모든 항목은 필수항목입니다." });
    }

    db.run(
        `INSERT INTO picks (team_id, champion_id, champion_name) VALUES (?, ?, ?)`,
        [team_id, champion_id, champion_name],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: this.lastID });
        }
    );
});

export default router;