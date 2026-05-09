import React, { useState } from "react";
import UsersForm from './UsersForm';
import './IncidentList.css';

function UserRoleManagment(props) {

    return (
        <table className="table table-striped table-hover shadow-sm">
            <thead className="table-personalizada-thead">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Fecha Registro</th>
                </tr>
            </thead>

            <tbody className="table-personalizada">
                {props.usuarios.map((i) => (
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.nombre}</td>
                        <td>{i.email}</td>
                        <td>
                            <span className={`badge ${i.rol?.nombre_rol === 'admin' ? 'bg-danger' : 'bg-info'}`}>
                                {i.rol?.nombre_rol}
                            </span>
                        </td>
                        <td>{i.fecha_registro}</td>
                        <td>
                            <button
                                className="btn btn-warning btn-sm"
                                onClick={() => props.onCambiarRol(i.email)}
                            >
                                Cambiar Rol
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserRoleManagment;