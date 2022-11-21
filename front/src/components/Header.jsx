import React from "react";

export function Header() {
  return (
    <header className="bg-dark py-5">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 fw-bolder text-white mb-2">
                Un mundo de soluciones logisticas para ti
              </h1>
              <p className="lead fw-normal text-white-50 mb-4">
                EntregaYa! Soluciones en transporte, entrega y logistica
                integral
              </p>
              <p className="lead fw-normal text-white-50 mb-4">
                ¡Lo tenemos todo!
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a
                  className="btn btn-primary btn-lg px-4 me-sm-3"
                  href="#features"
                >
                  Conoce nuestros servicios
                </a>{" "}
                <a className="btn btn-warning btn-lg px-4" href="/login">
                  Ver estado de tu envío
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <img
              className="img-fluid rounded-3 my-5"
              src="/img/logo.png"
              alt="..."
            />
          </div>
        </div>
      </div>
    </header>
  );
}
