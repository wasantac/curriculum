import { Link } from "react-router-dom";
import AboutWrapper from "../../components/AboutWrapper";

export const Estudios = () => {
    return (
        <AboutWrapper title="Estudios">
            <div className="col-sm-6">
                <h2>Colegio Americano de Guayaquil</h2>
                <p>
                    Culminé mis estudios de primaria y secundaria en el
                    prestigioso Colegio Americano. Ahí aprendí mucho inglés el
                    cual me ha ayudado mucho ya que obtuve un certificado de B2
                    del bachillerato internacional. Me gradué de Bachiller en
                    Ciencias.
                </p>
            </div>
            <div className="col-sm-6">
                <h2>Escuela Superior Politécnica del Litoral</h2>
                <p>
                    Ahora estoy estudiando en una de las mejores universidades
                    del pais que es la Escuela Superior Politécnica del Litoral.
                    Estoy cursando la carrera de ingeniería en computación y
                    ahora estoy en el 6to Semestre de la Carrera. También en
                    esta universidad obtuve un certificado B2 de inglés de
                    Cambridge.
                </p>
            </div>
        </AboutWrapper>
    );
};

export const Experiencia = () => {
    return (
        <AboutWrapper title="Proyectos de Otras Empresas">
            <div className="col-sm-4">
                <h2>Confirmar.org Admin</h2>
                <p>
                    En este proyecto estuve trabajando en el sitio web de la
                    sección administrativa de confirmar.org la cual fue
                    realizado con Angular y Firebase como el backend.
                </p>
            </div>
            <div className="col-sm-4">
                <h2>Bancor</h2>
                <p>
                    En este proyecto estuve trabajando en el sitio web haciendo
                    un rediseño completo del sitio web del banco Bancor en
                    Argentina usando React como FrontEnd y Java como Backend.
                    Este proyecto lo estuve trabajando en Technisys.
                </p>
            </div>
            <div className="col-sm-4">
                <h2>Urbazapp</h2>
                <p>
                    En este proyecto estuve trabajando en el sitio web comercial
                    llamado Urbazapp el cual fue trabajado con React como
                    FrontEnd y LoopBack como Backend.
                </p>
            </div>
        </AboutWrapper>
    );
};

export const AboutMe = () => {
    return (
        <AboutWrapper>
            <div className="col">
                <h2>Un poquito sobre mí</h2>
                <p>
                    Soy una persona muy proactiva, muy divertido (Siempre Facha)
                    y un gran líder cuando se lo requiere. Me gusta mucho la
                    programación y ahora estoy emprendiendo nuevos retos desde
                    que aprendí a programar en web frameworks para hacer páginas
                    web. Me gusta mucho el anime siendo mi favorito Jojo's
                    Bizzarre Adventure y también me gusta armar cubos de rubik.
                </p>
            </div>
        </AboutWrapper>
    );
};

export const DescargarPDF = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="descargar-wrapper my-5">
                <h1 className="descargar-text">Descarga a mi CV Aquí</h1>
                <Link
                    to="/files/CV_WALTER_SANTACRUZ.pdf"
                    target="_blank"
                    download
                    className="boton-descargar "
                >
                    Descargar
                </Link>
            </div>
        </div>
    );
};
