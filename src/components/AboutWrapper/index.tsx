import React from "react";
import "./index.scss";
type Props = {
    children?: React.ReactNode;
    title?: string;
};

const AboutWrapper: React.FC<Props> = (props) => {
    const { children, title } = props;
    return (
        <div className="container about-wrapper">
            {title ? (
                <>
                    <h1>{title}</h1>
                    <hr />
                    <div className="row">{children}</div>
                </>
            ) : (
                <>
                    <div className="d-flex justify-content-center align-items-center">
                        {children}
                    </div>
                </>
            )}
        </div>
    );
};

export default AboutWrapper;
