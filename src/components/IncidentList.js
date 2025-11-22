import React, { useState } from "react";
import './IncidentList.css';

function IncidentList(props) {

    return (
        <table className="table table-striped table-hover shadow-sm">
            <thead className="table-personalizada-thead">
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Descripcion</th>
                    <th>Usuario</th>
                    <th>Urgencia</th>
                    <th>Ubicacion</th>
                    <th>Categoria</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                </tr>
            </thead>

            <tbody className="table-personalizada">
                {props.incidencias.map((i) => (
                    <tr key={i.id_incidencia}>
                        <td><strong>Id_incidencia: </strong>{i.id_incidencia}</td>
                        <td><strong>Titulo: </strong>{i.titulo} </td>
                        <td><strong>Descripcion: </strong>{i.descripcion}</td>
                        <td><strong>Usuario: </strong>{i.id_usuario}</td>
                        <td><strong>Urgencia: </strong>{i.nivel_urgencia}</td>
                        <td><strong>Ubicacion: </strong>{i.ubicacion}</td>
                        <td><strong>Categoria: </strong>{i.categoria}</td>
                        <td><strong>Fecha: </strong>{i.fecha_registro}</td>
                        <td><strong>Estado: </strong>{i.estado}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default IncidentList;