import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./index.scss";

type Props = {
    routes: route[];
};

const Hamburger: React.FC<Props> = (props) => {
    const [show, setShow] = React.useState<boolean>(false);
    const [finishAnimation, setFinish] = React.useState<boolean>(false);
    const { routes } = props;
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
        <div className="hamburger-container">
            {show && (
                <div
                    className={
                        finishAnimation
                            ? "hamburger-menu hamburger-menu-hide"
                            : "hamburger-menu hamburger-menu-show"
                    }
                    onAnimationEnd={() => {
                        if (finishAnimation) setShow(false);
                    }}
                >
                    <div
                        className="hamburger-close"
                        onClick={() => {
                            setFinish(true);
                        }}
                    >
                        Cerrar Menú
                        <AiOutlineClose />
                    </div>
                    <ul>{setRoutes(routes)}</ul>
                </div>
            )}
            <button
                className="hamburger"
                onClick={() => {
                    setShow(true);
                    setFinish(false);
                }}
            >
                <GiHamburgerMenu />
            </button>
        </div>
    );
};

export default Hamburger;
