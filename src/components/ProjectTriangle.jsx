import { useContext, useState } from "react";
import { AppContext } from "../App";
import "./ProjectTriangle.css";
import { Link } from "react-router-dom";

const ProjectTriangle = ({ className, githubUrl, projectUrl }) => {
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
    <div
      onMouseEnter={pronounceTriangle}
      onMouseLeave={showSurrounding}
      className={className + (isHovered ? " remove-grayscale" : "")}
    >
      <div className={isHovered ? "" : "hidden"}>
        <p>project title </p>
        <Link to={projectUrl}>Visit Project </Link>
        <Link to={githubUrl}>Code </Link>
      </div>
    </div>
  );
};

export default ProjectTriangle;
