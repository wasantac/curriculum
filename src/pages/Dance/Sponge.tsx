import React from "react";
import "./index.scss";

const Sponge = () => {
    let spongebob = [];
    for (let i = 0; i < 10; i++) {
        spongebob.push(
            <img
                src="images/yB.gif"
                alt="spongebob"
                key={i}
                className="spongebob"
            />
        );
    }
    return (
        <div className="particles-bg">
            {spongebob.map((item) => {
                return item;
            })}
        </div>
    );
};

export default Sponge;
