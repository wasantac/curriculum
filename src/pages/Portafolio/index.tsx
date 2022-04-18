import React from "react";
import PageWrapper from "../../components/PageWrapper";
import "./index.scss";
import datos from "./datos.json";
import ProjectCard from "../../components/ProjectCard";
import { Experiencia } from "../About/Componentes";
const Title = () => {
    return (
        <div className="container">
            <h1 className="Proyectos-Title">Proyectos Personales</h1>
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
    return (
        <>
            <PageWrapper>
                <Title />
                <Pictures />
                <Experiencia />
            </PageWrapper>
        </>
    );
};

export default Portafolio;
