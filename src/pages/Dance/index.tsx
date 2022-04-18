import React from "react";
import "./index.scss";
import Sponge from "./Sponge";

const Dance = () => {
    const audio = new Audio("/music/sponge.mp3");
    const [show, setShow] = React.useState<boolean>(false);

    return (
        <div className="dance-container">
            {!show ? (
                <button
                    onClick={() => {
                        audio.volume.toFixed(50);
                        audio.play();
                        setShow(true);
                    }}
                >
                    No le des Click
                </button>
            ) : (
                <div className="wrapper-dance d-flex align-items-center justify-content-center">
                    <img src="images/yB.gif" alt="spongebob" />
                    <Sponge />
                </div>
            )}
        </div>
    );
};

export default Dance;
