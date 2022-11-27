import compression from 'compression';
import { json, urlencoded } from 'body-parser';
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const env = require('../config');
const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');

app.use(compression());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cookieParser());
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.listen(env.port, env.host);

module.exports = app;

/*
var logger = require('morgan');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/users', users)

module.exports = app;
*/