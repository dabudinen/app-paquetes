import React from "react";

export function Integrantes() {
  return (
    <section className="py-5 bg-dark">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2 className="fw-bolder text-secondary">
                Proyecto Plataforma Recogida de Paquetes InstaYA!
              </h2>
            </div>
          </div>
        </div>
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="fw-bolder text-light">Misión TIC Uninorte</h2>
            <p className="lead fw-normal text-light mb-5">
              NRC 2240 - Grupo 10
            </p>
          </div>
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-5 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                {" "}
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="/img/integrantes-01.jpg"
                  alt="..."
                />
                <h5 className="fw-bolder text-light">
                  Ezequiel Elguedo Santander
                </h5>
                <div className="fst-italic text-secondary">
                  Frontend Developer
                </div>
              </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                {" "}
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="/img/integrantes-02.jpg"
                  alt=""
                />
                <h5 className="fw-bolder text-light">Alfredo Nuñez Dickson</h5>
                <div className="fst-italic text-secondary">
                  Frontend developer
                </div>
              </div>
            </div>
            <div className="col mb-5 mb-5 mb-sm-0">
              <div className="text-center">
                {" "}
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="/img/integrantes-03.jpg"
                  alt=""
                />
                <h5 className="fw-bolder text-light">
                  Johnny De Castro Martinez
                </h5>
                <div className="fst-italic text-secondary">
                  FullStack developer{" "}
                </div>
              </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                {" "}
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="/img/integrantes-04.jpg"
                  alt=""
                />
                <h5 className="fw-bolder text-light">
                  Daniel Abudinen Ordoñez
                </h5>
                <div className="fst-italic text-secondary">
                  Gestor de DB / QA tester
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="text-center">
                {" "}
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="/img/integrantes-05.jpg"
                  alt=""
                />
                <h5 className="fw-bolder text-light">Elkin López Barrios</h5>
                <div className="fst-italic text-secondary">
                  Backend Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
