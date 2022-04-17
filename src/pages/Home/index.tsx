import React from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import "./index.scss";
import walter from "../../assets/walter.jpg";
import Lenguajes from "../../components/Lenguajes";

const Intro = () => {
    return (
        <div className="home container">
            <div className="row my-5">
                <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column home-intro">
                    <h2>Hola soy,</h2>
                    <h1>Walter Santacruz</h1>
                    <p>Desarrollador Semi Senior en Technisys</p>
                </div>
                <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column">
                    <img
                        src={walter}
                        alt="Walter IMG"
                        width={500}
                        height="auto"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
};

const Experiencia = () => {
    const experiencia =
        "He trabajado con algunos lenguajes de programación como python y Java realizando proyectos sencillos en consola o interfaz gráfica. Tengo también conocimientos en desarrollo de bases de datos por lo que pueden ser implementadas en los servicios que ofrezco. Por otra parte mi experiencia se centra más en el desarrollo de sitios web (Aproximadamente 1 año) utlizando frameworks como react o angular. Para estos sitios me gusta utilizar plantillas de bootstrap combinandola con mis propios estilos en css o scss para darle una mejor presentación.";
    return (
        <div className="home container">
            <div className="row my-5">
                <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column home-intro">
                    <h2>Experiencia</h2>
                    <p className="experiencia-text">{experiencia}</p>
                </div>
                <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column">
                    <Lenguajes />
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className="home-container">
            <Navigation />
            <Intro />
            <Experiencia />
            <Footer />
        </div>
    );
};

export default Home;
