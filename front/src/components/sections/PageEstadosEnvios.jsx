import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageEstadosEnvios() {
    const navigate = useNavigate();
    const handleNuevoEnvio = (e) => {
      e.preventDefault();
      navigate("/nuevo_envio")
    }
    return (
    <section className="py-5">
    <div className="container px-5">
    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
      
            <div className="d-flex justify-content-between my-2">
                <h2>Estados de Envios</h2>
                <button className="btn btn-dark btn-block" type="button" onClick={handleNuevoEnvio}>Crear Envio</button>
            </div>
            <table className="table" class="table table-striped">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">Fecha de envio</th>
                <th scope="col">Estado de envio</th>
                <th scope="col">Caracteristicas del paquete</th>
                <th scope="col">Remitente</th>
                <th scope="col">Destinatario</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>15/11/2022</td>
                <td>Enviado</td>
                <td>21 kg</td>
                <td>Alfredo Nunez</td>
                <td>Johnny De Castro</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>10/11/2022</td>
                <td>Entregado</td>
                <td>1 kg</td>
                <td>Elkin Lopez</td>
                <td>Ezequiel Elguedo</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>15/11/2022</td>
                <td>Enviado</td>
                <td>15 kg</td>
                <td>Daniel Abudinen</td>
                <td>Johnny De Castro</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>15/11/2022</td>
                <td>Enviado</td>
                <td>100 kg</td>
                <td>Roderick Arias</td>
                <td>Mision TIC 2022</td>
                </tr>
            </tbody>
            </table>
        </div>  
    </div>
  
    </section>
  );
}
