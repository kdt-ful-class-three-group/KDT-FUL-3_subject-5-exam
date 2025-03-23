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

// 생성자 함수를 사용하여 중복 column을 처리

function createTable(tableName, columns) {
    const columnNames = columns.map (columns => `${columns.name} ${columns.type}`).join(',\n ');
    const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (
        ${columnNames}
    )`;
    db.run(sql);

    const tables = [
        {
            tableName:'bans',
            columns:[
                {name:"team", type:"TEXT", NOTNULL: true},
                {name:"champion_id", type:"TEXT", NOTNULL: true},
                {name:"champion_name", type:"TEXT", NOTNULL: true},
            ]

        },
        {
            name: 'picks',
            columns: [
                { name: 'team_id', type: 'INTEGER NOT NULL' },
                { name: 'champion_id', type: 'TEXT NOT NULL' },
                { name: 'champion_name', type: 'TEXT NOT NULL' },
            ]
        },
        {
            name: 'teams',
            columns: [
                { name: 'team_color', type: 'TEXT NOT NULL' },
            ]
        }
    ];

    // 배열의 요소를 하나씩 꺼내서 써야할때는 for of 사용함
    db.serialize(() => {
       for(const table of tables) {
           createTable(table.name, table.columns);
       }
    });


}


export default db