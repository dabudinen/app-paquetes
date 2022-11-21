import React from "react";

export default function PageRegister() {
  return (
    <section className="bg-light py-5 ">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">Ingreso de usuarios</h1>
          <p className="lead fw-normal text-muted mb-0">
            Ingresa al sistema de gestión de envíos con tu usuario asignado
          </p>
        </div>

        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="/img/register-banner.png" className="img-fluid" />
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
                          Sign into your account
                        </h5>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1m"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                for="form3Example1m"
                              >
                                First name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1n"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                for="form3Example1n"
                              >
                                Last name
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6 className="mb-0 me-4">Gender: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="femaleGender"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              for="femaleGender"
                            >
                              Female
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="maleGender"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="maleGender"
                            >
                              Male
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="otherGender"
                              value="option3"
                            />
                            <label
                              className="form-check-label"
                              for="otherGender"
                            >
                              Other
                            </label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select className="select">
                              <option value="1">State</option>
                              <option value="2">Option 1</option>
                              <option value="3">Option 2</option>
                              <option value="4">Option 3</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-4">
                            <select className="select">
                              <option value="1">City</option>
                              <option value="2">Option 1</option>
                              <option value="3">Option 2</option>
                              <option value="4">Option 3</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example90"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form3Example90">
                            Direccion
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example97"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form3Example97">
                            Email ID
                          </label>
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="reset"
                            className="btn btn-danger btn-lg"
                          >
                            Reset all
                          </button>
                          <a href="/login">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg ms-2"
                          >
                            Ya tienes cuenta? 
                          </button >
                          </a>
                          
                          <button
                            type="button"
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Submit form
                          </button>
                        </div>
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
