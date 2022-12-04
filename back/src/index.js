import { serverInit } from './app';
import { dbStart } from './db';

dbStart(process.env.LOCALDB); // db conn
serverInit(process.env.PORT || 3003, process.env.HOST); // start express
