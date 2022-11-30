import React from "react";
import { useState, useEffect } from "react";
import SectionTitle from "../SectionTitle";
import FormInput from "../FormInput";

export default function PageRegister() {
  const msjs = "";
  const [msj, setMsj] = useState(msjs);

  const registro = async (e) => {
    const newuser = {};
    e.preventDefault();
    
    if (document.getElementById("nameid").value.length != 0) {
      newuser.firstName = document.getElementById("nameid").value;
    } else {
      setMsj("el Campo Nombre está vacío");
    }

    newuser.lastName = document.getElementById("apellidoid").value;
    newuser.documentId = document.getElementById("documentId").value;
    newuser.email = document.getElementById("email").value;
    const pw = document.getElementById("password").value;
    let pww = document.getElementById("checkpassword").value;

    if (!pw.length == 0 && pw === pww) {
      setMsj("");
      newuser.password = pw;
    } else {
      setMsj("El password no coincide");
    }

    const apiUrl = "http://127.0.0.1:3000/api/users/add";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newuser),
    });
    const data = await response.json();
    console.log(data)

    setMsj(data.message);

  };
    return (
    <section className="bg-light py-5 ">
      <div className="container px-5 my-5">
        <SectionTitle
          secctionTitle="Registro de usuarios"
          sectionDescription="Registrate para ingresar al sistema de gestión de envíos con tu usuario asignado"
        />
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
                      {/* Form start */}
                      <form onSubmit={registro}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">
                            <img src="/img/logo-instaya.png" alt="" />
                          </span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3">
                          Crea una nueva cuenta
                        </h5>
                        <div className="row">
                          <FormInput
                            label="Nombre"
                            inputId="nameid"
                            optionalClass="form-floating col-md-6 mb-4"
                          />
                          <FormInput
                            label="Apellido"
                            inputId="apellidoid"
                            optionalClass="form-floating col-md-6 mb-4"
                          />
                        </div>

                        <FormInput label="Dirección" inputId="direccion" />
                        <FormInput
                          label="Documento de Identidad"
                          inputId="documentId"
                        />
                        <FormInput label="Email" inputId="email" type="email" />
                        <FormInput
                          label="Clave"
                          inputId="password"
                          type="password"
                        />
                        <FormInput
                          label="Verificar Clave"
                          inputId="checkpassword"
                          type="password"
                        />
                        <span className="text-danger">{msj}</span>
                        <div className="d-flex justify-content-end pt-3">
                          <a href="/login">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg ms-2"
                            >
                              Ya tienes cuenta?
                            </button>
                          </a>

                          <button
                            type="submit"
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                      {/* Form end */}
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
