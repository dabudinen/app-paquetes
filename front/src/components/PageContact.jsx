import React from "react";

export default function PageContact() {
  const [value, setValue] = React.useState("");
  return (
    <section className="py-5">
      <div className="container px-5">
        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Mantente en contacto</h1>

          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* Name input */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                    type="text"
                  />{" "}
                  <label htmlFor="name">Nombre Completo</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Nombre es requerido.
                  </div>
                </div>
                {/* Email address input */}
                <div className="form-floating mb-3">
                  {" "}
                  <input
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                    type="email"
                  />{" "}
                  <label htmlFor="email">Email</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    Un email es requerido.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email no es valido.
                  </div>
                </div>
                {/* Phone number input */}
                <div className="form-floating mb-3">
                  {" "}
                  <input
                    className="form-control"
                    id="phone"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                    type="tel"
                  />{" "}
                  <label htmlFor="phone">Teléfono</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    Su número de telefono es requerido.
                  </div>
                </div>
                {/* Message input */}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control textmsj"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    onChange={(v) => setValue(v)}
                    value={value}
                  />

                  <label htmlFor="message">Mensaje</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    Debes escribir un mensaje.
                  </div>
                </div>
                {/* Submit success message */}

                {/* This is what your users will see when the form */}
                {/* has successfully submitted */}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Envío existoso</div>
                    To activate this form, sign up at <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                {/* Submit error message */}

                {/* This is what your users will see when there is */}
                {/* an error submitting the form */}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* Submit Button */}
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-lg disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Contact cards */}
        <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-chat-dots"></i>
            </div>
            <div className="h5 mb-2">Chat with us</div>
            <p className="text-muted mb-0">
              Chat live with one of our support specialists.
            </p>
          </div>
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-people"></i>
            </div>
            <div className="h5">Ask the community</div>
            <p className="text-muted mb-0">
              Explore our community forums and communicate with other users.
            </p>
          </div>
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-question-circle"></i>
            </div>
            <div className="h5">Support center</div>
            <p className="text-muted mb-0">
              Browse FAQ's and support articles to find solutions.
            </p>
          </div>
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-telephone"></i>
            </div>
            <div className="h5">Call us</div>
            <p className="text-muted mb-0">
              Call us during normal business hours at (555) 892-9403.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
