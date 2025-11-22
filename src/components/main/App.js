import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../MiLista';
import React, { useState } from "react";
import Form from '../Form';

function App() { 
    const [incidencias, setIncidencia] = useState ([
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
        }]);



    const agregarIncidencia = (nuevo_usuario, nuevo_titulo, nuevo_descripcion, nuevo_categoria,
        nuevo_nivel_urgencia, nuevo_ubicacion) => {

        const fecha = new Date();
        const year = fecha.getFullYear();
        const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
        const day = String(fecha.getDate()).padStart(2, '0');
        const fechaFormateada = `${year}-${month}-${day}`

        const nuevo_id = incidencias.length + 1;
        const esDuplicado = incidencias.some(incidencia =>
            incidencia.id_incidencia === nuevo_id);

        if (esDuplicado) {
            alert('ERROR: El número de incidencia ' + nuevo_id + ' ya existe. No se guardará.');
            return;
        }

        const nueva_incidencia = {
            id_incidencia: incidencias.length + 1,
            id_usuario: nuevo_usuario,
            titulo: nuevo_titulo,
            descripcion: nuevo_descripcion,
            categoria: nuevo_categoria,
            nivel_urgencia: nuevo_nivel_urgencia,
            ubicacion: nuevo_ubicacion,
            fecha_registro: fechaFormateada,
            estado: "Abierta",
        }

        setIncidencia([...incidencias, nueva_incidencia]);

        console.log("Datos recibidos: ", nueva_incidencia);
    }




    return (
    <>
        <Header />
        <h2>Mi aplicación</h2>
        <div id='parrafo'>
            <p>En está app se muestra el contenido de mi app</p>
        </div>
        <div class="contenedor-incidencias">
            <main>
                <MiLista incidencias={incidencias} />
                <br />
            </main>
            <aside>
                <Form agregarIncidencia={agregarIncidencia} />
            </aside>
        </div>
        {/*<Footer />*/}
    </>
    );
}


export default App;
