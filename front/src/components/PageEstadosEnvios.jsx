import React from "react";
import { useNavigate,Link } from "react-router-dom";


const label = [
    "id",
    "Fecha de envio",
    "Estado de envio",
    "Caracteristicas del paquete",
    "Remitente",
    "Destinatario",
    "Editar"
]

const envios = [
    {
        id: "1",
        pickupDate: "30/11/2022",
        state: "Enviado",
        weight: "21 kg",
        sender: "Alfredo Nuñez",
        toRecipient: "Johnny De Castro"
    },

    {
        id: "2",
        pickupDate: "28/11/2022",
        state: "Enviado",
        weight: "15 kg",
        sender: "Elkin Lopez",
        toRecipient: "Roderick Arias"
    },

    {
        id: "3",
        pickupDate: "20/11/2022",
        state: "Entregado",
        weight: "12 kg",
        sender: "Daniel Abudinen",
        toRecipient: "Alfredo Nuñez"
    }

]

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
                {/* Creación de encabezado de tabla */}
                <tr>
                {label.map((label, index) => {
                                return (<th key={index} scope="col">{label}</th>)
                            })}
                </tr>
            </thead>
            <tbody>
             {/* Creación de contenido de la constante envios    */}
            {envios.map((envios, index) => {
                            return (
                                <tr>
                                    <th scope="row">{envios.id}</th>
                                    <td>{envios.pickupDate}</td>
                                    <td>{envios.state}</td>
                                    <td>{envios.weight}</td>
                                    <td>{envios.sender}</td>
                                    <td>{envios.toRecipient}</td>
                                    
                                    <td className="d-flex gap-2 justify-content-center">
                                        <Link className="btn btn-success" to={''}>Edit</Link>                            
                                    </td>
                                </tr>)
                        })}
            </tbody>
            </table>
        </div>  
    </div>
  
    </section>
  );
}
