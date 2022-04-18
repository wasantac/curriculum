import React from "react";
import "./index.scss";
const Form = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <h1>Contácteme</h1>
            <div className="grupo-formulario">
                <label htmlFor="correo">Correo Electrónico</label>
                <input
                    type="email"
                    className=""
                    id="correo"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
            </div>
            <div className="grupo-formulario">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    rows={5}
                    cols={40}
                    maxLength={100}
                    className=""
                    id="mensaje"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button type="submit" className="mt-2 boton-enviar">
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default Form;
