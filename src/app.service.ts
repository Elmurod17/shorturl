import { Injectable } from '@nestjs/common';
import * as sqlite3 from 'sqlite3';
import { open } from 'sqlite';

@Injectable()
export class AppService {
  private db: any;

  constructor() {
    this.initDatabase();
  }

  async initDatabase() {
    this.db = await open({
      filename: './data.db',
      driver: sqlite3.Database,
    });

    await this.db.run(`
      CREATE TABLE IF NOT EXISTS generated_strings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        value TEXT NOT NULL
      )
    `);
  }

  async generateString(): Promise<void> {
    const harflar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let natija = '';
    for (let i = 0; i < 4; i++) {
      const index = Math.floor(Math.random() * harflar.length);
      natija += harflar[index];
    }

    await this.db.run('INSERT INTO generated_strings (value) VALUES (?)', natija);
  }
}
