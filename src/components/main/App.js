import Header from '../header/Header';
import Footer from '../footer/Footer';
import IncidentList from '../IncidentList';
import Login from '../Login';
import React, { useEffect, useState } from "react";
import Form from '../Form';
import Fondo from '../../img/fondo.jpg'
import './App.css';


const LOGIN_API_URL = 'http://localhost:3004/login';

function App() { 

    const INCIDENCIA_API_URL = 'http://localhost:3004/incidencias';

    const USUARIO_API_URL = 'http://localhost:3004/users';


    const [usuarios, setUsuarios] = useState([]);
    const [incidencias, setIncidencia] = useState([]);

    const [usuarioLogin, setUsuarioLogin] = useState(null);

    useEffect(() => {
        const obtenerIncidencias = async () => {
            try {
                let response = await fetch(INCIDENCIA_API_URL);
                if (!response.ok) {
                    throw new Error("HTTP Error");
                }
                const data = await response.json();
                console.log(data);
                setIncidencia(data);
            } catch (e) {
                console.error("Error al cargar las incidencias:", e);
            }
        }

        const obtenerUsuarios = async () => {
            try {
                let response = await fetch(USUARIO_API_URL);
                if (!response.ok) {
                    throw new Error("HTTP Error");
                }
                const data = await response.json();
                console.log(data);
                setUsuarios(data);
            } catch (e) {
                console.error("Error al cargar los usuarios:", e);
            }
        }

        obtenerIncidencias();
        obtenerUsuarios();
    }, []);

    const inicioSesion = async (email, password) => {
        try {
            const response = await fetch(LOGIN_API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ "email": email, "password": password }),
            });

            if (response.ok) {
                let data = await response.json();
                setUsuarioLogin(data["user"]);
                console.log("Login exitoso. Usuario: ", data["user"]);
                return true;
            } else {
                const errorData = await response.json();
                alert(`Fallo de autenticación. Error: ${response.status}: ${errorData}`);
                return false;
            }
        } catch (e) {
            console.error(e);
            alert("No se pudo conectar con el servidor de autenticación", e);
            return false;
        }
    }


    const agregarIncidencia = async (titulo_nuevo, usuario_nuevo, descripcion_nuevo,
        categoria_nuevo, nivelurgencia_nuevo, ubicacion_nuevo) => {
        try {
        const fecha = new Date();
        const year = fecha.getFullYear();
        const month = String(fecha.getMonth() + 1).padStart(2, '0');
        const day = String(fecha.getDate()).padStart(2, '0');
        const fecha_formateada = year + "-" + month + "-" + day;

        let usuarioEncontrado = usuarios.find((u) => u.email == usuario_nuevo);
            if (usuarioEncontrado) {
                const nueva_incidencia = {
                    usuario: usuarioEncontrado,
                    titulo: titulo_nuevo,
                    descripcion: descripcion_nuevo,
                    categoria: categoria_nuevo,
                    nivel_urgencia: nivelurgencia_nuevo,
                    fecha_registro: fecha_formateada, 
                    ubicacion: ubicacion_nuevo,
                    estado: "Abierta",
                    comentarios: []
                }

                let response = await fetch(INCIDENCIA_API_URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(nueva_incidencia)
                });

                if (!response.ok) {
                    throw new Error("Fallo de la petición POST. Estado HTTP: ${response.status}");
                }

                let data = await response.json();
                console.log("nueva incidencia: ", data);
                setIncidencia([...incidencias, data]);
            } else {
                alert("No se puede crear incidencia. Usuario no encontrado");
                throw new Error("Error al crear incidencia. Usuario no encontrado");
            }
        } catch (e) {
            console.error("Falló la petición POST de la incidencia", e.message);
        }
    }




    return (
        <>
            <div className="card" style={{ backgroundImage: `url(${Fondo})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <Header />
                <h2 className='mb-4 text-center'>Mi aplicación</h2>
                {usuarioLogin ? (

                    <div className="container-fluid mt-4 row">
                        <main className='col-md-6'>
                        <p>En está app se muestra el contenido de mi app</p>
                        <IncidentList incidencias={incidencias} />
                        <br />
                    </main>
                    <aside className='col-md-6'>
                        <Form agregarIncidencia={agregarIncidencia} />
                    </aside>
                </div>
                ) :
                <Login inicioSesion={inicioSesion}></Login>
                }
                <Footer />
            </div>
    </>
    );
}


export default App;
