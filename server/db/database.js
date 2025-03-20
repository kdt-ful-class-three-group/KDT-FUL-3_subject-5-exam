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

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS bans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            team_id INTEGER NOT NULL,
            champion_id TEXT NOT NULL,
            champion_name TEXT NOT NULL
        )`
    );

    db.run(
        `CREATE TABLE IF NOT EXISTS picks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            team_id INTEGER NOT NULL,
            champion_id TEXT NOT NULL,
            champion_name TEXT NOT NULL
        )`
    );

    db.run(
        `CREATE TABLE IF NOT EXISTS teams (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            team_color TEXT NOT NULL
        )`
    );
});

export default db