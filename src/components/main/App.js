import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import React from "react";

function App() {
    return (
        <>
            <Header />
            <h2>Mi aplicación</h2>
            <div id='parrafo'>
                <p>En está app se muestra el contenido de mi app</p>
            </div>
            <Footer />
        </>
  );
}

function MiLista(props) {
    return (
        <div className='lista'>
            <h4>Lista de {props.titulo}</h4>
            <ul>
                <li>{props.nombre1}</li>
                <li>{props.nombre2}</li>
                <li>{props.nombre3}</li>
            </ul>
        </div>
    )
}

class MiListaReact extends React.Component {
    render() {
        return (
            <div className='lista'>
                <h4>Lista de {this.props.titulo}</h4>
                <ul>
                    <li>{this.props.nombre1}</li>
                    <li>{this.props.nombre2}</li>
                    <li>{this.props.nombre3}</li>
                </ul>
            </div>
        )
        
    }
}

export default App;
