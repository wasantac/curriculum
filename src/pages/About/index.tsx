import React from "react";
import PageWrapper from "../../components/PageWrapper";
import { Estudios, AboutMe, DescargarPDF } from "./Componentes";
import "./index.scss";

const About = () => {
    return (
        <>
            <PageWrapper>
                <AboutMe />
                <Estudios />
                <DescargarPDF />
            </PageWrapper>
        </>
    );
};

export default About;
