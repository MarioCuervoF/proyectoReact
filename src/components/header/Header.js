import React from "react";
import './Header.css';
import Logo from '../../img/N1.png'

class Header extends React.Component {
    render() {
        return (
            <div className="bg-personalizado-azul text-center texto-personalizado p-3">
                <img src={Logo} alt="Logo N1" width="100px"></img>
                <h3>
                    Bienvenido a la página de contactos
                </h3>
            </div>
        );
    }
}

export default Header;