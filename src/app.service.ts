import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

function generateString() {
  let harflar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let natija = '';
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * harflar.length);
    natija = harflar[index];
  }
  return natija;
}
console.log(generateString());
 