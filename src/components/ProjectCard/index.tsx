import React from "react";
import "./index.scss";
type Props = {
    data: card;
};

const ProjectCard: React.FC<Props> = (props) => {
    const { data } = props;

    return (
        <div className="card-wrapper">
            <img
                className="image-card img-fluid"
                src={`/images/${data.src}`}
                alt={data.alt}
            />
            <div className="overlay-card">
                <h1 className="overlay-title">{data.title}</h1>
                <span className="overlay-text">{data.content}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
