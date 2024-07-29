import { useContext, useState } from "react";
import { AppContext } from "../App";
import "./ProjectTriangle.css";
import { Link } from "react-router-dom";

const ProjectTriangle = ({
  className,
  githubUrl,
  projectUrl,
  title,
  imgUrl,
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
      <figcaption>
        <div className={isHovered ? "" : "hidden"}>
          <p>{title}</p>
          <Link to={projectUrl}>Visit Project </Link>
          <Link to={githubUrl}>Code </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProjectTriangle;
