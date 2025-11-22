import './Form.css';
import React from "react";


class Form extends React.Component {

    render() {
        return (
            <div>
                <h2>Registrar incidencia</h2>
                <form onSubmit={this.envioFormulario}>
                    
                    {/*Id incidencia*/}
                    {/*<div className="elemento-form">
                        <label>Id incidencia</label>
                        <input type="number" name="id" placeholder="Introduce el id incidencia" required></input><br /><br />
                    </div>*/}
                    

                    {/*titulo incidencia*/}
                    <div className="elemento-form">
                        <label>Título Incidencia</label>
                        <input type="text" name="titulo" placeholder="Introduce el titulo" required></input><br /><br />
                    </div>

                    {/*usuario*/}
                    <div className="elemento-form">
                        <label>Usuario</label>
                        <input type="text" name="usuario" required></input><br /><br />
                    </div>

                    {/*descripción incidencia*/}
                    <div className="elemento-form">
                        <label>Descripción</label>
                        <textarea name="descripcion" required></textarea><br /><br />
                    </div>

                    {/*categoria*/}
                    <div className="elemento-form">
                        <label>Categoria</label>
                        <select name="categoria" required>
                            <option value="">Seleccionar...</option>
                            <option>Hardware</option>
                            <option>Software</option>
                            <option>Conectividad</option>
                            <option>Usuarios</option>
                            <option>Infraestructura</option>
                        </select>
                        <br />
                    </div>
                    {/* Urgencia */}
                    <div className="elemento-form">
                        <label>Nivel de urgencia</label>
                        <select name="nivel" required>
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
                        <label>Ubicacion</label>
                        <input type="text" name="ubicacion" placeholder="Ej: B205" required />
                    </div>

                    {/* Botón */}
                    <button type="submit" className="elemento-form-button">Registrar</button>
                </form>
            </div>
        )
    }

    envioFormulario = (event) => {
        event.preventDefault();
        const form = event.target;
        this.props.agregarIncidencia(
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
}

export default Form;