import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../MiLista';
import React from "react";

function App() {
    return (
        <>
            <Header />
            <h2>Mi aplicaci�n</h2>
            <div id='parrafo'>
                <p>En est� app se muestra el contenido de mi app</p>
            </div>
            <br/>
            <MiLista />
            <Footer />
        </>
  );
}


export default App;
