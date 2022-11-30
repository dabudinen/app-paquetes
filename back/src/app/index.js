import compression from 'compression';
import { json, urlencoded } from 'body-parser';
import env from '../config/env.json';
import express from 'express';
import path from 'path';
import { welcome } from './welcome';
import users from './users';
// import package from './pickuprequest';
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');

const app = express();

app.use(compression());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

app.get('/', welcome);
app.use('/api/users/', users);
// app.use('/api/pkg/', package);

export const serverInit = () => {
  app.listen(env.port, env.host, () => {
    console.log('Inicia el servidor');
  });
};

/* 
Componentes: 
URL> /api/users/ POST 
LOGIN y ADD USER 

URL> /api/pkg/ POST GET PUT
NUEVO PKG, LISTADO DE PKG, ACTUALIZAR ESTADO DE PKG
*/
