import React from "react";
import PageWrapper from "../../components/PageWrapper";
import "./index.scss";
import datos from "./datos.json";
import ProjectCard from "../../components/ProjectCard";
const Title = () => {
    return (
        <div className="container">
            <h1 className="Proyectos-Title">Proyectos</h1>
            <p className="Proyectos-Text">
                ¡Ayúdame a llenar esta página con más proyectos!
            </p>
        </div>
    );
};

const Pictures = () => {
    return (
        <div className="card-grid">
            {datos.map((card: card) => {
                return <ProjectCard key={card.title} data={card} />;
            })}
        </div>
    );
};

const Portafolio = () => {
    console.log(datos);
    return (
        <>
            <PageWrapper>
                <Title />
                <Pictures />
            </PageWrapper>
        </>
    );
};

export default Portafolio;
