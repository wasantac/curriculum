import React from "react";
import LetraMovimiento from "../LetraMovimiento";
import "./index.scss";
const Lenguajes = () => {
    let lista = [
        "Python",
        "Java",
        "MYSQL",
        "MongoDB",
        "JavaScript",
        "CSS",
        "HTML",
        "REACT.JS",
        "Express.JS",
        "MERN STACK",
        "Angular CLI",
        "SCSS",
        "Vue",
        "Laravel",
        "React Native",
        "Redux",
        "Ruby",
        "PHP",
    ];
    return (
        <div className="container">
            <div className="fondo">
                <h2 className="blanco">
                    <LetraMovimiento texto="Conocimientos Sobre:"></LetraMovimiento>
                </h2>
                <div className="contenedor-lenguajes">
                    {lista.map((item, key) => {
                        return (
                            <p
                                className="m-1 text-white rounded shadow agrandar lenguaje-card text-center"
                                key={`estadisticas${key}`}
                            >
                                {item}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Lenguajes;
