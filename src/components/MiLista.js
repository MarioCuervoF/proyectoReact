import React, { useState } from "react";

function MiLista(props) {
    const incidencias = props.incidencias || [];

        return (
            <>
                <dl>
                    {incidencias.map((i) => (
                        <React.Fragment key={i.id_incidencia}>
                            <dt><strong>Titulo: </strong>{i.titulo} </dt>
                            <dd><strong>Id_incidencia: </strong>{i.id_incidencia}</dd>
                            <dd><strong>Descripcion: </strong>{i.descripcion}</dd>
                            <dd><strong>Usuario: </strong>{i.id_usuario}</dd>
                            <dd><strong>Urgencia: </strong>{i.nivel_urgencia}</dd>
                            <dd><strong>Ubicacion: </strong>{i.ubicacion}</dd>
                            <dd><strong>Categoria: </strong>{i.categoria}</dd>
                            <dd><strong>Fecha: </strong>{i.fecha_registro}</dd>
                            <dd><strong>Estado: </strong>{i.estado}</dd>
                        </React.Fragment>
                    ))}
                </dl>
            </>
        )
}

export default MiLista;