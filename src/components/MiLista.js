import React from "react";

class MiLista extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            incidencias: [
                {
                    id_incidencia: 1,
                    id_usuario: "e768590345h",
                    titulo: "Proyector averiado en aula 2",
                    descripcion: "El proyector no enciende y la lámpara parece dañada.",
                    categoria: "Hardware",
                    nivel_urgencia: "Alta",
                    fecha_registro: "2025-10-03",
                    estado: "Abierta",
                    ubicacion: "A301"
                },
                {
                    id_incidencia: 2,
                    id_usuario: "e235439802s",
                    titulo: "Ordenador de secretaría no enciende",
                    descripcion: "El equipo no responde al presionar el botón de encendido.",
                    categoria: "Hardware",
                    nivel_urgencia: "Media",
                    fecha_registro: "2025-10-02",
                    estado: "En proceso",
                    ubicacion: "B205"
                },
                {
                    id_incidencia: 3,
                    id_usuario: "e765849381b",
                    titulo: "Impresora sin conexión",
                    descripcion: "La impresora de la sala de profesores no aparece en red.",
                    categoria: "Red/Impresión",
                    nivel_urgencia: "Alta",
                    fecha_registro: "2025-10-01",
                    estado: "Resuelta",
                    ubicacion: "Sala de profesores"
                },
                {
                    id_incidencia: 4,
                    id_usuario: "e549012738z",
                    titulo: "Caída de red en Aula de Tecnología",
                    descripcion: "Varios ordenadores del aula no pueden acceder a la red local ni a internet.",
                    categoria: "Red",
                    nivel_urgencia: "Alta",
                    fecha_registro: "2025-10-10",
                    estado: "Abierta",
                    ubicacion: "B201"
                },
                {
                    id_incidencia: 5,
                    id_usuario: "e098765432q",
                    titulo: "Fallo de alimentación de un monitor",
                    descripcion: "El monitor de un equipo no enciende. El cable de alimentación parece estar bien conectado.",
                    categoria: "Hardware",
                    nivel_urgencia: "Media",
                    fecha_registro: "2025-10-11",
                    estado: "En proceso",
                    ubicacion: "A101"
                },
                {
                    id_incidencia: 6,
                    id_usuario: "e112233445p",
                    titulo: "Teclado con teclas atascadas",
                    descripcion: "El teclado tiene varias teclas que no responden o están pegadas.",
                    categoria: "Hardware",
                    nivel_urgencia: "Baja",
                    fecha_registro: "2025-10-12",
                    estado: "Resuelta",
                    ubicacion: "A205"
                },
                {
                    id_incidencia: 7,
                    id_usuario: "e760192837t",
                    titulo: "Lentitud generalizada del servidor",
                    descripcion: "Todas las aplicaciones de red están funcionando muy lentamente.",
                    categoria: "Servidor",
                    nivel_urgencia: "Alta",
                    fecha_registro: "2025-10-12",
                    estado: "En proceso",
                    ubicacion: "Sala de Servidores"
                },
                {
                    id_incidencia: 8,
                    id_usuario: "e382910475f",
                    titulo: "Actualización de Windows pendiente",
                    descripcion: "Aparece un mensaje constante de que el sistema necesita reiniciarse para aplicar una actualización.",
                    categoria: "Software",
                    nivel_urgencia: "Baja",
                    fecha_registro: "2025-10-06",
                    estado: "Abierta",
                    ubicacion: "Dirección"
                },
                {
                    id_incidencia: 9,
                    id_usuario: "e998877660w",
                    titulo: "Malware detectado en equipo de Secretaría",
                    descripcion: "El antivirus ha notificado la presencia de software malicioso.",
                    categoria: "Seguridad/Software",
                    nivel_urgencia: "Alta",
                    fecha_registro: "2025-10-15",
                    estado: "Abierta",
                    ubicacion: "Secretaría"
                },
                {
                    id_incidencia: 10,
                    id_usuario: "e256789012x",
                    titulo: "Usuario no puede acceder a su perfil de red",
                    descripcion: "Al iniciar sesión en cualquier equipo, el profesor recibe un mensaje de error indicando que no se pudo cargar su perfil de usuario.",
                    categoria: "Software",
                    nivel_urgencia: "Alta",
                    fecha_registro: "2025-10-22",
                    estado: "Abierta",
                    ubicacion: "Varias aulas"
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.incidencias.map((i) => (
                        <li key={i.id_incidencia}><strong>Título: </strong>{i.titulo}<br></br>
                            <strong>Descripción: </strong>{i.descripcion}<br></br>
                            <strong>Usuario: </strong>{i.id_usuario}<br></br>
                            <strong>Urgencia: </strong>{i.nivel_urgencia}<br></br>
                            <strong>Ubicación: </strong>{i.ubicacion}<br></br><br></br>
                        </li>
                    ))}
                </ul>
            </div>
        )

    }
}

export default MiLista;