import { Router } from 'express';
const router = Router();
// 404 objeto no encontrado
router.use((req, res, next) => {
  res.status(404);
  res.json({ error: 'pagina no encontrada' });
  next();
});

// error handler
router.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
