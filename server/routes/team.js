import express from 'express';
import db from"../db/database.js";

const router = express.Router();


router.get('/',(req,res)=>{
    res.json({message: "team 라우터 정상 작동"});
})

router.get('/',(req,res)=>{
    db.all("SELECT * FROM teams",[],( err, rows)=>{
        if(err){
            return res.status(500).json({error: err.message});
        }
        res.json(rows)
    })
})


router.post('/',(req,res)=>{
    const [team_color] = req.body;
    if(!team_color){
        return res.status(400).json({error:"팀 진영은 필수 데이터입니다."})
    }
    db.run(` INSERT INTO teams(team_color) VALUES(?)`,
    [team_color],

    function (err){
    if(err) return res.status(500).json({error:err.message});
    res.status(201).json({id:this.lastID})
    })
});

export default router;