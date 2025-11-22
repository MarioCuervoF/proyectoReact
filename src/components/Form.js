import React, { useState } from "react";
import './Form.css';



function Form(props) {
    const envioFormulario = (event) => {
        event.preventDefault();
        const form = event.target;
        props.agregarIncidencia(
            /*form.id_incidencia,*/
            form.titulo.value,
            form.usuario.value,
            form.descripcion.value,
            form.categoria.value,
            form.nivel.value,
            form.ubicacion.value,
            /*form.fecha,*/
            /*form.estado*/
        );
    };

    return (
    <div className="card p-4">
        <h2 className="card-title mb-4 text-center">Registrar incidencia</h2>
        <form onSubmit={envioFormulario}>

            {/*Id incidencia*/}
            {/*<div className="elemento-form">
                    <label>Id incidencia</label>
                    <input type="number" name="id" placeholder="Introduce el id incidencia" required></input><br /><br />
                </div>*/}


            {/*titulo incidencia*/}
            <div className="elemento-form">
                <label className="mb-3 form-label">Título Incidencia</label>
                <input className="mb-3 form-control" type="text" name="titulo" placeholder="Introduce el titulo" required></input>
            </div>

            {/*usuario*/}
            <div className="elemento-form">
                <label className="mb-3 form-label">Usuario</label>
                <input className="mb-3 form-control" type="text" name="usuario" required></input>
            </div>

            {/*descripción incidencia*/}
            <div className="elemento-form">
                <label className="mb-3 form-label">Descripción</label>
                <textarea  className="mb-3 form-control" name="descripcion" required></textarea>
            </div>

            {/*categoria*/}
            <div className="elemento-form">
                <label className="mb-3 form-label">Categoria</label>
                <select  className="mb-3 form-control" name="categoria" required>
                    <option value="">Seleccionar...</option>
                    <option>Hardware</option>
                    <option>Software</option>
                    <option>Conectividad</option>
                    <option>Usuarios</option>
                    <option>Infraestructura</option>
                </select>

                </div>
            {/* Urgencia */}
            <div className="elemento-form">
                <label className="mb-3 form-label">Nivel de urgencia</label>
                <select  className="mb-3 form-control" name="nivel" required>
                    <option value="">Seleccionar...</option>
                    <option>Alta</option>
                    <option>Media</option>
                    <option>Baja</option>
                </select>
            </div>

            {/* Estado */}
            {/*<div className="elemento-form">
                    <label>Estado</label>
                    <select name="estado" required>
                        <option>Abierta</option>
                        <option>En curso</option>
                        <option>Resuelta</option>
                        <option>Cerrada</option>
                    </select>
                </div>*/}

            {/* Fecha registro */}
            {/*<div className="elemento-form">
                    <label>Fecha registro</label>
                    <input type="date" name="fecha" required />
                </div>*/}

            {/* Ubicación */}
            <div className="elemento-form">
                <label className="mb-3 form-label">Ubicacion</label>
                <input className="mb-3 form-control" type="text" name="ubicacion" placeholder="Ej: B205" required />
            </div>

            {/* Botón */}
                <button type="submit" className="btn btn-outline-succes mx-auto d-grid rounded-pill btn-personalizado">Registrar</button>
        </form>
    </div>
    )
}

export default Form;