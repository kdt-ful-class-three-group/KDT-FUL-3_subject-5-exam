import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const sqlite3 = require('sqlite3').verbose();

import { fileURLToPath } from 'url';
import path from 'path';



// __dirname 직접 정의
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// db/database.js 안에서!
const db = new sqlite3.Database(__dirname + '/mydatabase.db');

const tables = [
    {
        tableName:'bans',
        columns:[
            {name:"team_id", type:"TEXT NOT NULL"},
            {name:"champion_id", type:"TEXT NOT NULL"},
            {name:"champion_name", type:"TEXT NOT NULL"},
        ]

    },
    {
        tableName: 'picks',
        columns: [
            { name: 'team_id', type: 'INTEGER NOT NULL' },
            { name: 'champion_id', type: 'TEXT NOT NULL' },
            { name: 'champion_name', type: 'TEXT NOT NULL' },
        ]
    },
    {
        tableName: 'teams',
        columns: [
            { name: 'team_color', type: 'TEXT NOT NULL' },
        ]
    }
];

db.serialize(() => {
    for (const table of tables) {
        createTable(table.tableName, table.columns);
    }
});

// 생성자 함수를 사용하여 중복 column을 처리

function createTable(tableName, columns) {
    const columnNames = columns.map(columns => `${columns.name} ${columns.type}`).join(',\n ');
    const sql = `CREATE TABLE IF NOT EXISTS ${tableName}
                 (
                     ${columnNames}
                 )`;
    db.run(sql, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(` ${tableName} 테이블 생성됨`);
        }
    });
}







export default db