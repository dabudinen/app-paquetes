import React from "react";
import { useState, useEffect } from "react";
import SectionTitle from "../SectionTitle";
import FormInput from "../FormInput";

export default function PageLogin() {
  const msjs = "";
  const [msj, setMsj] = useState(msjs);
  const [estatus, setEstatus] = useState(false);
  
  useEffect(() => {
    const url = "http://127.0.0.1:3000/api/users/auth";
    fetch(url,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 'ok') {
          setMsj(`Bienvenido ${data.name}`);
          setEstatus(true);
        } else {
          setEstatus(false);
        }
      }, (error) => {
        setEstatus(false);
      });
    }, [])
  const closeSession = () => { 
    const url = "http://127.0.0.1:3000/api/users/close";
    fetch(url,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      })
      setEstatus(false);
      setMsj("Sesión cerrada");
  }
  const ingreso = async (e) => {
    const user = {};
    e.preventDefault();
    if (document.getElementById("email").value.length != 0) {
      user.email = document.getElementById("email").value;
    } else {
      setMsj("el campo email está vacío");
    }
    if (document.getElementById("password").value.length != 0) {
      user.password = document.getElementById("password").value;
    } else {
      setMsj("el campo clave está vacío");
    }
    const apiUrl = "http://127.0.0.1:3000/api/users/login";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      credentials: "include",
      body: JSON.stringify(user),
    });
    const data = await response.json();
    const mensaje = data.message;
    if (data.estatus === "ok") {
      setMsj("ingreso exitoso");
      setEstatus(true);
    }
    
    setMsj(mensaje);
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
                      {estatus == true ? (
                        <><div className="alert alert-success" role="alert">
                          {msj}
                          </div><a href="/estados_envios" className="btn btn-dark btn-lg btn-block">Puedes revisar tus envíos</a><br /><br />
                          <button onClick={closeSession}>Cerrar sesion</button>
                        </>
                      ) : (
                        <form onSubmit={ingreso}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">
                            <img src="/img/logo-instaya.png" alt="" />
                          </span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">
                          Ingresa a tu cuenta
                        </h5>
                        <FormInput label="Email" inputId="email" type="email" />
                        <FormInput
                          label="Clave"
                          inputId="password"
                          type="password"
                        />

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Ingresar
                          </button>
                        </div>
                        <span className="text-danger">{msj}</span>
                        <br />
                        <a className="small text-muted" href="#!">
                          Olvidate tu clave?
                        </a>
                        <p className="mb-5 pb-lg-2">
                          No tienes cuenta?
                          <a href="/register"> registrate aquí</a>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terminos y condiciones.
                        </a>
                        <a href="#!" className="small text-muted">
                          Política de privacidad
                        </a>
                      </form>
                      )}

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
