import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import useWindowDimensions from "../../utils/useWindowDimensions";
import Hamburger from "./Hamburger";

const Navigation = () => {
    const { width } = useWindowDimensions();
    const routes = [
        { to: "/", value: "Inicio" },
        { to: "/", value: "Sobre mí" },
        { to: "/", value: "Proyectos" },
        { to: "/", value: "Contácteme" },
    ];

    const setRoutes = (routes: route[]) => {
        const links = routes.map((route, index) => {
            return (
                <li key={index}>
                    <Link to={route.to}>{route.value}</Link>
                </li>
            );
        });
        return links;
    };
    return (
        <div className="navigation">
            <div className="image">
                <img src={logo} alt="logo" width={35} height={35} />
            </div>
            {width > 475 ? (
                <ul>{setRoutes(routes)}</ul>
            ) : (
                <Hamburger routes={routes} />
            )}
        </div>
    );
};

export default Navigation;
