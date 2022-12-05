import express from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import {} from 'dotenv/config';
import { json } from 'body-parser';
import { allowHeaderResponse } from './middleware';
// import { authUser } from './users/controller';
import { welcome } from './welcome';
import users from './users';
import Package from './pickuprequest';

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: 'GET,HEAD,POST,PATCH,DELETE,OPTIONS',
  credentials: true,
  optionSuccessStatus: 200,
  allowedHeaders: 'Content-Type, Authorization, X-Requested-With, Accept',
};
// , Credentials
const app = express();
const faviconPath = path.join(__dirname, '../public', 'favicon.ico');
app.use(cors(corsOptions));
app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));
app.use(json());
app.use(cookieParser());
app.use(favicon(faviconPath));

app.get('/', welcome);

app.all('/api/users/', allowHeaderResponse, users);
app.use('/api/users/', users);
app.all('/api/pkg', allowHeaderResponse, Package);
app.use('/api/pkg/', Package);

export const serverInit = (port, host) => {
  try {
    app.listen(port, host, () => {
      console.log(`Api up and running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.error({ 'Server error': error });
    process.exit();
  }
};

/* 
Componentes: 
URL> /api/users/ POST 
LOGIN y ADD USER 

URL> /api/pkg/ POST GET PUT
NUEVO PKG, LISTADO DE PKG, ACTUALIZAR ESTADO DE PKG
*/
