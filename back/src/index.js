import { serverInit } from './app';
import { dbStart } from './db';

dbStart(); // db conn
serverInit(); // start express
