import React from "react";

export default function PageNuevoEnvio() {
    return (
    <section className="py-5">
    <div className="container px-5">
    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <h2>Nuevo envio</h2>
        <div class="row g-2">
        <div class="col-md">
        <div className="form-floating mb-3">
                  <input className="form-control" id="direccionRecogida" />
                  <label htmlFor="name">Direccion de recogida</label>      
        </div>
        </div>
        <div class="col-md">
        <div className="form-floating mb-3">
                  <select className="form-select" id="ciudadRecogida">
                  <option selected>Seleccion...</option>
                    <option value="1">Barranquilla</option>
                    <option value="2">Bogota</option>
                    <option value="3">Cali</option>
                    <option value="3">Medellin</option>
                  </select> 
                  <label for="floatingSelectGrid">Seleccione la ciudad de recogida</label>     
        </div>
        </div>
        </div>
        <div class="row g-3">
        <div class="col-md">
        <div className="form-floating mb-3">
                  <input className="form-control" id="altoPaquete" />
                  <label htmlFor="name">Alto paquete [cm]</label>      
        </div>
        </div>
        <div class="col-md">
        <div className="form-floating mb-3">
                  <input className="form-control" id="anchoPaquete" />
                  <label htmlFor="name">Ancho paquete [cm]</label>      
        </div>
        </div>
        <div class="col-md">
        <div className="form-floating mb-3">
                  <input className="form-control" id="profundidadPaquete" />
                  <label htmlFor="name">Profundidad Paquete [cm]</label>      
        </div>
        </div>
        </div>
        <div className="form-floating mb-3">
                  <input className="form-control" id="fechaRecogida" />
                  <label htmlFor="name">Fecha recogida [dd/mm/aaaa]</label>      
        </div>
        <div class="row g-2">
        <div class="col-md">
        <div className="form-floating mb-3">
                  <input className="form-control" id="direccionEnvio" />
                  <label htmlFor="name">Direccion de Envio</label>      
        </div>
        </div>
        <div class="col-md">
        <div className="form-floating mb-3">
        <select className="form-select" id="ciudadDestino">
                  <option selected>Seleccion...</option>
                    <option value="1">Barranquilla</option>
                    <option value="2">Bogota</option>
                    <option value="3">Cali</option>
                    <option value="3">Medellin</option>
                  </select> 
                  <label for="floatingSelectGrid">Seleccione la ciudad de destino</label>      
        </div>
        </div>
        </div>
        
        <div className="form-floating mb-3">
                  <input className="form-control" id="nombreDestinatario" />
                  <label htmlFor="name">Nombre completo destinatario</label>      
        </div>
        <div className="form-floating mb-3">
                  <input className="form-control" id="telefonoDestinatario" />
                  <label htmlFor="name">telefono destinatario</label>      
        </div>
        <div className="form-floating mb-3">
                  <input className="form-control" id="identificacionDestinatario" />
                  <label htmlFor="name">Identificacion destinatario (C.C./Nit)</label>      
        </div>
        <button className="btn btn-success btn-block" type="button">Solicitar nuevo envio</button>
    </div>
    
    </div>
    
    </section>
    
    
    );


}