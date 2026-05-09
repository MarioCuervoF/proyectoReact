import React, { useState } from 'react';

function UsersForm(props) {
    const envioFormUsuarios = (event) => {
        event.preventDefault();
        const form = event.target;
        props.agregarUsuario(
            form.nombre.value,
            form.email.value,
            form.password.value,
            form.rol.value
        );
    };

    return (
        <div className="card p-4">
            <h2 className="card-title mb-4 text-center">Registrar Usuario</h2>
            <form onSubmit={envioFormUsuarios}>

                <div className="elemento-form">
                    <label className="mb-3 form-label">Nombre usuario</label>
                    <input className="mb-3 form-control" type="text" name="nombre" placeholder="Introduce el nombre" required></input>
                </div>

                <div className="elemento-form">
                    <label className="mb-3 form-label">Email</label>
                    <input className="mb-3 form-control" type="email" name="email" required></input>
                </div>

                <div className="elemento-form">
                    <label className="mb-3 form-label">Contraseña</label>
                    <textarea className="mb-3 form-control" name="password" required></textarea>
                </div>

                <div className="elemento-form">
                    <label className="mb-3 form-label">Rol</label>
                    <select className="mb-3 form-control" name="rol" required>
                        <option value="">Seleccionar...</option>
                        <option>comun</option>
                        <option>admin</option>
                    </select>

                </div>

                {/* Botón */}
                <button type="submit" className="btn btn-outline-succes mx-auto d-grid rounded-pill btn-personalizado">Registrar</button>
            </form>
        </div>
    )
}

export default UsersForm;