import React from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import "./index.scss";

const Movingbg = () => {
    const { width } = useWindowDimensions();
    let triangles = [];
    const checkPhoneWidth = width < 560;

    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            triangles.push("circle");
        } else {
            triangles.push("triangle");
        }
    }
    return (
        <div className="bg-wrapper">
            {checkPhoneWidth
                ? triangles.slice(0, 30).map((item, i) => {
                      return <span className={item} key={`trig${i}`}></span>;
                  })
                : triangles.map((item, i) => {
                      return <span className={item} key={`trig${i}`}></span>;
                  })}
        </div>
    );
};

export default Movingbg;
