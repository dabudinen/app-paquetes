const app = require('./app');

const server = app.listen(3000, () => {
  console.log(
    `Express está funcionando en el puerto: ${server.address().port}`
  );
});
