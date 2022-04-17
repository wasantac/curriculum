import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import "./index.scss";

type Props = {
    children?: React.ReactNode;
};

const PageWrapper: React.FC<Props> = (props) => {
    const { children } = props;
    return (
        <div className="main-container">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
};

export default PageWrapper;
