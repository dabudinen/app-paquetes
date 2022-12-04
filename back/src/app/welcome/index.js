const msj = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <title>API App Envíos InstaYa!</title>

    <!-- Bootstrap icons-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      rel="stylesheet"
    />
  </head>

  <body class="d-flex flex-column h-100">
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
        <img src="/logo-instaya.png" />
        <a
          href="/"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <span class="fs-4 px-4">InstaYA Server API</span>
        </a>
      </header>

      <main>
        <img src="/logo.png" class="float-start px-5 px-3" />
        <h1>Bienvenido a InstaYA</h1>
        <p class="fs-4 col-md-10">
          Esta Web no entrega contenidos HTML, es un servicio API, no debes
          consultarla directamente
        </p>

        <hr class="col-3 col-md-2 mb-5" />
      </main>
      <footer class="pt-5 my-5 text-muted border-top">
        Created by the Dream Team, MINTIC 2022 - Uninorte. NRC 2240 Grupo 10 · ©
        2022
      </footer>
    </div>
  </body>
</html>
`;

export const welcome = (req, res) => {
  res.status(200).send(msj);
};
