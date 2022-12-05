import React from "react";
import { useState, useEffect } from "react";

export default function PageNuevoEnvio() {
  // set min date
  const now = new Date()
  const minDate = new Date(now);
  minDate.setDate(now.getDate() + 1);
  const fecha = minDate.toISOString().split('T')[0];
  // set date format for mongoDB ISODate Schema
  const [msj, setMsj] = useState("");
  const [estatus, setEstatus] = useState(false);
  const [uid, setUid] = useState("");
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
          setUid(data.id);
          ///console.log(data);
        } else {
          setEstatus(false);
          setMsj(`No tienes permisos para acceder a esta página`);
        }
      }, (error) => {
        setEstatus(false);
        setMsj(`No tienes permisos para acceder a esta página`);
      });
    }, [])

  const addNewPickup = async (e) => {
    e.preventDefault();
    const pkgObject = {};
    const dateString = document.getElementById("pickupDate").value
    const dateArray = dateString.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    const formattedDate = date.toISOString(); // fecha en formato ISO 8601

    var selectFromCity = document.getElementById('fromCity');
    var valueFromCity = selectFromCity.options[selectFromCity.selectedIndex].text;

    pkgObject.sender = uid;
    pkgObject.width = document.getElementById("width").value;
    pkgObject.height = document.getElementById("height").value;
    pkgObject.depth = document.getElementById("depth").value;
    pkgObject.pickupDate = formattedDate;
    pkgObject.fromCity = valueFromCity;
    pkgObject.fromAddress = document.getElementById("fromAddress").value;
    pkgObject.toCity = document.getElementById("toCity").value;
    pkgObject.toAddress = document.getElementById("toAddress").value;
    pkgObject.toRecipient = document.getElementById("toRecipient").value;
    pkgObject.toRecipientPhone = document.getElementById("toRecipientPhone").value;
    pkgObject.toRecipientId = document.getElementById("toRecipientId").value;

    const apiUrl = "http://127.0.0.1:3000/api/pkg/add";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pkgObject),
    });
    const data = await response.json();
    console.log(data)

    setMsj(data.message);

  }

  /*
      "_id": "638d340fbc5338bd01cbe934",
    "sender": "638c18620d53a99b5906553a",
    "arrivedBefore24h": false,
    "width": 20,
    "height": 10,
    "depth": 15,
    "state": "guardado",
    "pickupDate": "2019-12-19T22:49:11.502Z",
    "fromCity": "data.fromCity",
    "fromAddress": "data.fromAddress",
    "toCity": "data.toCity",
    "toAddress": "data.toAddress",
    "toRecipient": "data.toRecipientId",
    "toRecipientPhone": "data.toRecipientId",
    "toRecipientId": "data.toRecipientId",
    "createdAt": "2022-12-04T23:58:07.772Z",
    "updatedAt": "2022-12-04T23:58:07.772Z" 
  */

  return (
    <section className="py-5">
      <div className="container px-5">
      {estatus == true ? (
        <form onSubmit={addNewPickup}>
        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
          <h2>Nuevo envio</h2>
          {msj} 
          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input className="form-control" id="fromAddress" />
                <label htmlFor="fromAddress">Direccion de recogida</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <select className="form-select" id="fromCity" defaultValue='DEFAULT'>
                  <option selected value="DEFAULT">Seleccion...</option>
                  <option value="1">Barranquilla</option>
                  <option value="2">Bogota</option>
                  <option value="3">Cali</option>
                  <option value="3">Medellin</option>
                </select>
                <label htmlFor="fromCity">Seleccione la ciudad de recogida</label>
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input className="form-control" id="height" />
                <label htmlFor="name">Alto paquete [cm]</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input className="form-control" id="width" />
                <label htmlFor="name">Ancho paquete [cm]</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <input className="form-control" id="depth" />
                <label htmlFor="name">Profundidad Paquete [cm]</label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" type="date" id="pickupDate" min={fecha} />
            <label htmlFor="name">Fecha recogida [dd/mm/aaaa]</label>
          </div>
          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input className="form-control" id="toAddress" />
                <label htmlFor="name">Direccion de Envio</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">
                <select name="city" className="form-select" id="toCity" defaultValue='DEFAULT'>
                  <option selected value="DEFAULT">Seleccion...</option>
                  <option value="1">Barranquilla</option>
                  <option value="2">Bogota</option>
                  <option value="3">Cali</option>
                  <option value="3">Medellin</option>
                </select>

                <label htmlFor="toCity">Seleccione la ciudad de destino</label>
              </div>
            </div>
          </div>

          <div className="form-floating mb-3">
            <input className="form-control" id="toRecipient" />
            <label htmlFor="toRecipient">Nombre completo destinatario</label>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="toRecipientPhone" />
            <label htmlFor="toRecipientPhone">telefono destinatario</label>
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" id="toRecipientId" />
            <label htmlFor="toRecipientId">Identificacion destinatario (C.C./Nit)</label>
          </div>
          <button className="btn btn-success btn-block" type="submit" >Solicitar nuevo envio</button>
        </div></form>
) : (
  <><div className="alert alert-danger" role="alert"> {msj} </div></>
)}
      </div>

    </section>


  );


}