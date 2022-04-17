import React, { useState, useEffect } from "react";
import "./index.scss";

type Props = {
    texto: string;
};

const LetraMovimiento: React.FC<Props> = (props) => {
    const { texto } = props;
    const [spanList, setSpanList] = useState<string[]>([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        if (!load) {
            let lista = texto.split("");
            let finalList: string[] = [];
            for (let letra of lista) {
                finalList.push(letra);
            }
            setSpanList(finalList);
            setLoad(true);
        }
    }, [load, texto]);

    return (
        <>
            {!load ? (
                <></>
            ) : (
                spanList.map((item, i) => {
                    return (
                        <span className="letra-color" key={`color${i}`}>
                            {item}
                        </span>
                    );
                })
            )}
        </>
    );
};

export default LetraMovimiento;
