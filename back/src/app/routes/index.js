const express = require('express');
const router = express.Router();
const cookieval = 'value';
const username = 'name';

const MyVariable = {
  data: 'my dat',
  more: 'mo data',
};
const MyVariable2 = {
  data: 'my datos',
  more: 'more',
};
router.get('/', (req, res) => {
  res.json(MyVariable);

  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('IP visitante ' + ipaddress);
});

router.get('/add', (req, res) => {
  res.send(MyVariable2);

  const ipaddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('IP visitante ' + ipaddress);
  // console.log(JSON.stringify(req.headers));
});

router.get('/setcookie', (req, res) => {
  res.cookie(`cookie_session_${username}`, cookieval, {
    maxAge: 604800000, // 7 days
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
  });
  res.send(MyVariable);
});

router.get('/deletecookie', (req, res) => {
  res.clearCookie();
  res.cookie(`cookie_session_${username}`, cookieval, {
    maxAge: -86400000, // yesterday
  });
  res.send({ message: 'Los datos de su sesion han sido borrados' });
});

// 404 objeto no encontrado
router.use((req, res, next) => {
  res.status(404);
  res.json({ error: 'pagina no encontrada' });
  next();
});
module.exports = router;

// error handler
router.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
metodos: 
/auth sign in sign out 
/package add, edit, delete, cancel...
*/
