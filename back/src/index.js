// import { app } from './app';
// app;
const routes = require('./app/routes');
const server = require('./app');

server.use('/', routes);
console.log(`Express está funcionando`);
