import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle";

export default function PageLogin() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/estados_envios");
  };

  return (
    <section className="bg-light py-5 ">
      <div className="container px-5 my-5">
        <SectionTitle
          secctionTitle="Ingreso de usuarios"
          sectionDescription="Ingresa al sistema de gestión de envíos con tu usuario asignado"
        />

        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="/img/contact-banner.png" className="img-fluid" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">
                            <img src="/img/logo-instaya.png" alt="" />
                          </span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">
                          Ingresa a tu cuenta
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Clave
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={handleSubmit}
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Olvidate tu clave?
                        </a>
                        <p className="mb-5 pb-lg-2">
                          No tienes cuenta?{" "}
                          <a href="/register">registrate aquí</a>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terminos y condiciones.
                        </a>
                        <a href="#!" className="small text-muted">
                          Política de privacidad
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
