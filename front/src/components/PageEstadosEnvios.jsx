import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer"

export default function PageEstadosEnvios() {
  return (
    <>
      
        <div className="container">
            <h2>Bienvenido a estados de envios</h2>
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
    </>
  );
}
