import { useState } from "react";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendFormLogin = (event) => {
        event.preventDefault();
        props.inicioSesion(email, password);
    }

    return (
        <div>
            <form onSubmit={sendFormLogin}>
                <h2>Iniciar sesión</h2>
                <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;