import { useContext, useState } from "react";
import { AppContext } from "../App";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = ({
  className,
  githubUrl,
  projectUrl,
  title,
  imgUrl,
  overlayColor,
}) => {
  const { setGrayscale } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const showSurrounding = () => {
    setGrayscale(false);
    setIsHovered(false);
  };

  const pronounceTriangle = () => {
    setGrayscale(true);
    setIsHovered(true);
  };

  return (
    <figure
      className={className + (isHovered ? " remove-grayscale" : "")}
      onMouseEnter={pronounceTriangle}
      onMouseLeave={showSurrounding}
    >
      <img src={imgUrl} />
      <div
        className="color-overlay"
        style={overlayColor !== null ? { backgroundColor: overlayColor } : null}
      ></div>
      <figcaption>
        <div className={isHovered ? "" : "hidden"}>
          <p>{title}</p>
          <div>
            <Link to={projectUrl}>Visit Project </Link>
            <Link to={githubUrl}>Code </Link>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
