import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function PageEstadosEnvios() {

    const [msj, setMsj] = useState("");
    const [estatus, setEstatus] = useState(false);
    const [idUser, setIdUser] = useState("");
    const [aEnvios, setAEnvios] = useState([]);
    // const [idEnvio, setIdEnvio] = useState("");
    // const [pickupDate, setPickupDate] = useState("");
    // const [state, setState] = useState("");
    // const [weight, setWeight] = useState("");
    // const [trackingNumber, setTrackingNumber] = useState("");
    // const [toRecipient, setToRecipient] = useState("");

    useEffect(() => {
        const url = "http://127.0.0.1:3000/api/users/auth";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status == 'ok') {
                    setMsj(`${data.name}`);
                    setEstatus(true);
                    setIdUser(data.id);
                } else {
                    setEstatus(false);
                    setMsj(`No tienes permisos para acceder a esta página`);
                }
            }, (error) => {
                setEstatus(false);
                setMsj(`No tienes permisos para acceder a esta página`);
            });
        getPackages();
    }, [])

    const getPackages = async (e) => {
        const apiUrl = "http://127.0.0.1:3000/api/pkg/all";
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: "include",
        })
        const data = await response.json();
        setAEnvios(data);

    }

    const navigate = useNavigate();
    const handleNuevoEnvio = (e) => {
        e.preventDefault();
        navigate("/nuevo_envio")
    }
    /************************
     *  datos de la tabla
     ************************/
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

    ];
    const usuario = {
        "sender": idUser
    }
    return (
        <section className="py-5">
            <div className="container px-5">
                <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">


                    {estatus == true ? (
                        <>
                            <div className="d-flex justify-content-between my-2">
                                <h2>Estados de Envios</h2>
                                <button className="btn btn-dark btn-block" type="button" onClick={handleNuevoEnvio}>Crear Envio</button>
                            </div>
                            <div className="text-primary">Usuario {msj}</div>
                            <table className="table table table-striped">
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
                                    {aEnvios.map((envios, index) => {
        {/*
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
    */}
                                        return (
                                            <tr key={envios._id} onClick={() => { console.log(envios._id) }} >
                                                <th scope="row">{index}</th>
                                                <td>{envios.pickupDate}</td>
                                                <td>{envios.state}</td>
                                                <td>{envios.width}</td>
                                                <td>{msj}</td>
                                                <td>{envios.toRecipient}</td>

                                                <td className="d-flex gap-2 justify-content-center">
                                                    <Link className="btn btn-success" to={''}>Edit</Link>
                                                </td>
                                            </tr>)
                                    })}
                                </tbody>
                            </table></>
                    ) : (
                        <div className="alert alert-danger" role="alert"> {msj} </div>
                    )}

                </div>
            </div>

        </section>
    );
}