import React from "react";

export function Featured() {
  return (
    <section className="py-5" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className="fw-bolder mb-0">Conoce nuestras soluciones</h2>
          </div>
          <div className="col-lg-8">
            <div className="row gx-5 row-cols-1 row-cols-md-2">
              <div className="col mb-5 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-envelope"></i>{" "}
                </div>
                <h2 className="h4 principal">Soluciones Digitales</h2>
                <p className="mb-0">
                  <br />
                </p>
              </div>
              <div className="col mb-5 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-truck"></i>
                </div>
                <h2 className="h4 principal">Soluciones de transporte</h2>
                <p className="mb-0">
                  <br />
                </p>
              </div>
              <div className="col mb-5 mb-md-0 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-building"></i>
                </div>
                <h2 className="h4 principal">Soluciones empresariales</h2>
                <p className="mb-0">
                  <br />
                </p>
              </div>
              <div className="col h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  <i className="bi bi-bag-fill"></i>
                </div>
                <h2 className="h4 principal">Soluciones para eCommerce</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
