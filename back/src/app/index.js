import compression from 'compression';
import { json, urlencoded } from 'body-parser';
import env from '../config/env.json';
import express from 'express';
import path from 'path';
import { welcome } from './welcome';
import users from './users';
const cors = require('cors');
const favicon = require('serve-favicon');
// import package from './pickuprequest';
const cookieParser = require('cookie-parser');
const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:3001',
  methods: 'GET,HEAD,POST,PATCH,DELETE,OPTIONS',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization, X-Requested-With, Accept',
};
app.use(cors(corsOptions));
app.use(compression());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
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
