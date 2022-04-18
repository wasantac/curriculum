import React from "react";
import "./index.scss";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Spinner from "../Spinner";
type message = {
    correo: string;
    mensaje: string;
};

const Form = () => {
    const form = React.useRef<HTMLFormElement>(null);
    const [show, setShow] = React.useState<boolean>(false);
    const [formData, setFormData] = React.useState<message>({
        correo: "",
        mensaje: "",
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setShow(true);
        emailjs
            .send(
                "service_curriculum",
                "template_8l9v4m9",
                {
                    correo: formData.correo,
                    mensaje: formData.mensaje,
                },
                "user_pTLxySAThdUhCksIGYy0E"
            )
            .then((res) => {
                console.log(res);
                Swal.fire({
                    title: "Correo enviado Exitosamente",
                    width: 600,
                    padding: "3em",
                    color: "#ededed",
                    icon: "success",
                    background: "#2c394b",
                });
            })
            .catch((err) => {
                Swal.fire({
                    title: "Error al enviar el correo",
                    width: 600,
                    padding: "3em",
                    color: "#ededed",
                    icon: "error",
                    background: "#2c394b",
                });
            })
            .finally(() => {
                setFormData({
                    correo: "",
                    mensaje: "",
                });
                setShow(false);
            });
    };

    return (
        <form ref={form} className="formulario" onSubmit={handleSubmit}>
            <h1>Contácteme</h1>
            <div className="grupo-formulario">
                <label htmlFor="correo">Correo Electrónico</label>
                <input
                    type="email"
                    className=""
                    id="correo"
                    name="correo"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) =>
                        setFormData({
                            correo: e.target.value,
                            mensaje: formData.mensaje,
                        })
                    }
                    value={formData.correo}
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
                    name="mensaje"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) =>
                        setFormData({
                            correo: formData.correo,
                            mensaje: e.target.value,
                        })
                    }
                    value={formData.mensaje}
                />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button type="submit" className="mt-2 boton-enviar">
                    Enviar
                </button>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-2">
                {show && <Spinner></Spinner>}
            </div>
        </form>
    );
};

export default Form;
